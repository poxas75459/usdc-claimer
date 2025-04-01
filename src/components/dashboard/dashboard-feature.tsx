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
    "3JtpqqNXbywUfeX9KM6GAUi62mLqA3bhbHRyJuxn6qtmdS2ZwpkiSw7nddWjPqYyu83kuHn8xmrV4aSsMxJDEdC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4of4AsJr76P35P7Kc2wF9RY1DpnAnBExy3fF5cBkRx2w2p4j711NFYZPcyUrPU8kj1PcRSRszVtYu5Gh73r6b84m",
  "key1": "3pxqXnkth2botJ6FEU6LTLM4whF9nSoyxEi75bFdPjxhzEcuvnH6igdBbhkRDSkQ4HDE4r9r4kfzviWDN3FzVS5U",
  "key2": "53KG9WSBD9pRURUWU3CQuefShMVMmGAahK9aEFamA8QEWzsY37QZBR6zC7GHyUdeyUocBoV3RPWGbsDS96QhQsQw",
  "key3": "64nNQALNBS68z4U11jjjNkUT8Z4q4VdArmnGu1RVEJwzZ5HDyHcUAcwnCbjipcWauw3wWQEgWtT1U16KANiPx247",
  "key4": "4qFWqbJQq28JKdZaGgyZCmpUCAkBHUFes4aUnvtr9HGZBf77GAwqkpLPM1vaYiYBRPLdrqvAv1Nq37QNdXCRPCW2",
  "key5": "5gPQYCPdgZGAV8ZG2K3tELMVthbMzEWpDc9WwFWvVW3X9CeaSiDv8Sx862wZ2kkWrcj9zoAsLNNGNV6GXCi96Dk7",
  "key6": "5saQDRtFj3jmQYd58qRrzJarUq2REGYHL5vo6Qym1iara76ujugPCX5hNGqi6a6sjW8e6TxHN9Mxy8FXy7DwnQaT",
  "key7": "5TBo5xJ8X9Mbg9CXzyXpGDJtvoeq41Eyi5Uc1KMQ49WEEbf2DKuPhUX2E5ihjKFxQoo5CCGjcByAcjwCL3NHGuRr",
  "key8": "ZzXP16TCCnFucwXLgsxJGjZT5HynfMCBaG76KD42CM6Vtnrp85p93EAryLK23QVw7k7BJauFey8HmJqV4kwGSPx",
  "key9": "4gs284uhLP6C22Psukcq3S7q5eWLzpdwsnrNjuwEYH6ZbiQwK3492UdQqJn4itRxPYxfuC3TMMV4Ur3BSArt63zv",
  "key10": "3eYgPLu2rb32HstkCNyL9pK9HZfbUoYt8UPhmU6AfHTVmmzqu1SCRs7neW5h1QhiPzNk8KmbjoJEy9KQRAyd8Sik",
  "key11": "4Puo21wMqTVF4xytcJsyR2s7czMiuogA6Ffdqhauip1RKcV7QfzDi6siV9EGibTdyJdwMmq8GbJm2st5a8sK7sqZ",
  "key12": "4VrAF3qW29zkq5MdhQ5AWftxBM2o4EGy9CVnAvCEvNiKUTXUPENu6vdiizxH7vtxZGnwb5Z9JU4SLiC93A8EJohk",
  "key13": "4YGyFw6C4dyG8ueWjue1vkbxeF5yT8Tf7z4MQPbhb5Q9bwDVBsz96pDnL75TujRjYPkCQ39Qu5qiuZ3CdrbWeprv",
  "key14": "2DoudDHn1NwNSEiG4ixeMALxtiMHKmPbwUJfipbMkzUmdrSP79iFpnBZXSqyARrvUQPFvRiTLc6tm2eu7SkfmWN9",
  "key15": "3YxfoiFgt6DdUhToJ4sKyCDuQh5yLv637a39YYgzukzuNbxQvLebhT21t4g42DHvDJUk4Uw6XvNSEWwsuwZu8Nod",
  "key16": "bvTj5W9cGuYAZs4gf2jtCcuhYhdV2oep7mARAU4hkLKmk4UTK96kaT8cVjU8n8qwzefJjQuWcwwcvkNhzckN3d9",
  "key17": "4FQQMbGXbPfT5tERhLFtAts3nSXeuyK4o5TEDJWzsZBuebURzYLgLm61snfdXRoiDGrRfS8X4N464UzrDNMSvQjj",
  "key18": "51VjsvNMTW3nK6AAcQh1PWfUefzowE2ArjK3ZBhXzH1V41pnqSxfvg6cZLGMPbVjitMu8KXs24HkqPDbV5pDLtY7",
  "key19": "2ZDKZx1HBTogvX3q3CKrT5qV1xtmRSVzwkYAYTMgXU1hYXoZfbD7wrW3rM5pvpR9F6UTGeBj4oFktEFVtf3v2oSF",
  "key20": "3Ae5Se9UiGmCNJbD9Ec24fg9x4HJ4JQHGzWugX6ZxPsG3DuCjHBMUV3RZ1hKqooncE7bKsuRNb73FE9C698hdPYm",
  "key21": "5GkLAUqwcYDzeBzQNrZgbyReekoArjgVi6DhXRv45BARvUyMHR4tnuCZQmgpn8kKrwXqvDjN1zFczMag47egxWij",
  "key22": "2uGuJBy2jDSjVk3GydGCYrAMp46sZWebYrTz7h7ML5ekJzBJTRpjZBitvQVRiQvcjN3GB9MVewjet6KPv4k9YhWe",
  "key23": "3Fs71wppqYQUxUesu2UP3NRdds3MTLSYrv6Yattq36pWvK9J6pPi6meMuHY5f9JySJcPLqwS3wo5W2cR8j4z4Wo2",
  "key24": "5dXKVH7Zn3JLtqA39mgN9Lo598iCC7JeqeD8ha1RSPtCtdGfLZxRSZGJRZjdJi4T6dgzpmKjLqct5sppPsy16gjp",
  "key25": "3gTYM7LB4ukg4FFL5X5dYJnzoxktDZrAxAFSBv5SY2bZ8AvD2QLFtbRvg6L5GPr15PDsWxVQwHqsPXRZ46aDwou5",
  "key26": "48Z4T7y9kkRtyL4EuvmoSDXbWMnxuZbh1JSCUhrgazyxgn1Mssm246Enbe9hTnQFpgK1XBmfeGdgta1PofZT9tR5",
  "key27": "2CaHjy4NZpaDpvEoZLVVh27uC3Qjz1QQr2D32F5SD4x43S8AmfD8fzzRA4FGRDFWdwo8w3cA9KUGMLnA1AYe9b7c",
  "key28": "8b4ogkDxgq2VVBKqtgrF6yJdXEkKvdZJ1ZMP7r9LUQUs86qW4fUA6AE7W75wS7MobCPAueucFMePz39CJryWUnn",
  "key29": "HaKRrup9wQrURUyeQN8NrK2tftZXDDLdRZMtMTFbZLBMUJsxB7PVZM5Wu5JDaYe3K9QKuf4YpexrmtPXesJ6xsk",
  "key30": "49Bf18yfQtQnQozG47r2QjQFUEg1Jz6dCz2iFUbGVtA77jkHemZnp5Pmpq3iEiidXM2mp5TtzurHERpgUtVgCh2K",
  "key31": "5coM9CxmsbS8pzeHreGGvUY3V2zr9r11Hs3o8n5ADp7NyyYySc2Vb1VEAYk7JFFjnHETDch3Xoe2JPy1aWYhebsd"
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
