/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "21V7GsBgLibqtwKCW4yGTo6QCwJ4kYGQjRNyyDRd1NmHJYC2xa8XFBLDjpbCnVbdYDA3RrMqsZAi1EE1m9J21Ec8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aYMGcRp8FsVcCzQrHYjo6UYytchJs8uYn6UHEFyurbwUji6LDmvTDvPavpNccTAyX2vxLuaQXJrS9vfepxR7o93",
  "key1": "547RqecHXf72TF252BPdhVshFTgVuooGdwi86tybNnGs1Trf5DR94RbYEAkhcKaFo8Vn9917yN5DuZBnxPfyoQSf",
  "key2": "fDDyp2nyXn352TXDvtyD2phTs3oRkEVUyk3PDUXv13766vgHpKivfZn6eivgVcLVgSPNbd6SYPrpUDnTfBVuAaY",
  "key3": "21DxutUPLD3hkRYt8SePj73uBQNcM3nU1tXKPgYGA2cfEketKYWcKAkhaZU1FjUNnmPfKzoGJGrHWBy6HoE8vgmp",
  "key4": "3wmCg74NWnK48Hth7bbAiwc55YK4o1MmSK5pXdLFUCoUZPqNRiNnFs6ieT5rgJPfkgdnDHYu4R3kM1E6TtV29SeZ",
  "key5": "4KpAKKPoFahYdABsut66VXbMaUXNAAAWKQDjYeJarzWDTzL7G84CAZf6btxAq2e6M1mE8cGK8otGJBXqmaNKfBZ",
  "key6": "4rjMTQDndysCK9AB71ow5f5tUqC6d3H2pqZNoBJSev2Du595k81kRieWYSxsD5jLXCB198DEwQLcgr3GiQftCPY6",
  "key7": "2AwSA6mwP6n7ykRjiUgHsQ7BnGfbT6rBdRgyXj7N7gxohqMmGtr7srec31fr1BFoztRHeoeSYdqZrEVTFhB1Njzt",
  "key8": "5tnRovaGNka2x3u87VFHr7CsVYpGaoufTjoAeM6tgsUAqYJCwY5WzzkKSgz7Q7oodDrnnnEswD4cgyGawyyf9J2",
  "key9": "5XA33zLW9jtHs1mRTacTRrVwvqcJVnwJjmAKPfinQQvaGQKEmNKyGyDkc4nLceKRMzuJWjwfAjwN7mGJEk4KAbPb",
  "key10": "5Y4qQBBjrnRkoS4qx8w7w9VU7n5Vm74AXx49TSkARMH1MsEHkByZH8dcQoCkDRsuwEwXGx9C3yrGK5YYddnde1y1",
  "key11": "3EoqB2UTHybuLHwB5ndooYGjmm1qkuNscZpV77C2QotbodUSx4VGx3JS4NWBvA3y1bmDQkEmFAPJsE2s49SKGxvh",
  "key12": "229beik1x3MuyuRbSAFbYCBSpujzCeiajW4GRJV8U6wcvkXfePsuxdoWhJApdTxNceG6j4NysVDfXak1nvY1HafJ",
  "key13": "5DRjs9kB6ZagznPm42VkfBCWKpGSti3Y6ECTRogDhQkYiot5qSoYXbXjjM4FkAT8RSmj3LaLCo2JJovseXgTSExV",
  "key14": "fXFkTWu12BGgRcWfNpzUUQF8VNefZRrJBAbUycmFQiNCDGqdYJFrUDWpTjXy83ntKhpDvMNRuigGqxRb2qvWKfR",
  "key15": "2P7JEmaemPimz7CmaPqLoqiDxK5Z87m6FS1EtsMFV2JbxLbahJZZnLUwyS36kn4QfL3YNfw9nwKqmnRhs8LcNK7G",
  "key16": "3HDAJJEfRzcAJtWDhUUFier56g9VwWBAWomBvJszm2fgUQvmA7GAb5st2arjxY1E2CN7BaqDcn7bBdtchQTTcqye",
  "key17": "23bM5MjNHHJLv4d5nWcTdcHeBwZ1Ty8zaN29PYW8nfPJrgthedKv3UZXL6ZSgjgnftXiqUAzxdzK5JjGbs3cRNUh",
  "key18": "vt75pD6GuexxRFX7rynDPKjRmCnSzyKuqdLT9cubDqBvn2uTCugQzG1M9mpF2hiVkhr9raVf6ZdopEr5MMhtAf8",
  "key19": "3AnHBkWimAKxwDxqD9dmVTqaDXewRMjtg9a6PhXq6hHjpFwujgEVuV2tZeFy4iNXYEkoH9hV1ezRWgeSKV3FPJMp",
  "key20": "4V3TK1BwV3dm27FTiG1oXi2Uumgr1qK4upDB66C9GkZ2xSHGRcBSbDJe5f4QdT7eKMb8hvNh9TV7cQmgsoRYrqdB",
  "key21": "5Y9aUcSoBcoKFbfHrAwCCL3uwxdCzYALN8DJtpt3V1kvGEhteXHuK5EBKfj9zfw9JFVeX7Jrp8uTTz3dVTiTt9Pf",
  "key22": "3YuNEJXhtq9x91FDz3fevz8j83LLzdtnMP2dQGs4rsxYp8WLTERxMxXUHpF767yEaFGx2vmKfUHFPMuqvQ5qWRAw",
  "key23": "3XWitcBJbTtFDdmC569Wwki9yvntaCRFYyD2hiHbwK8YbVREyAF1NJRjuwnyES5y8s1ZJW1cwRT5XWfkM8kD9Qu1",
  "key24": "4ewcgcQzSgYhSHTogU6oi4DhvbYfuvZ3rdLiTd6tmPBfDCeyYhZkAMFyUncFNFyXeEFG77dWKWfzL17VdFGjsJod"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
