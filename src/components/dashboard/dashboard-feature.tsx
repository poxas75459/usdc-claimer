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
    "3pwaq5uCNaGVnTdBVyihpmUJ8upu4PYHCPoqRBEWWJZMzWYuxa39f3pwaGw6WjMYd4Vdpv7WHzTcHyfwEBpoL8rA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5epFBDfRGUQeK1JCeB2b7o6f6G7Vb7ZdF29pczeLWNJoCqpemhoJimS6GagDaXGgcbMGMcWcYxJTYT3W6uNouuzS",
  "key1": "3EZf5rKuv58GvhRF1Zb3BYCFHfVKfYHVjPSrLL7ja1SzzmFGvwxd46RDMtNYmN6V4jBETvpb5vogAxKQm9yVCtTr",
  "key2": "4zQFhmBKpfyotVPWW8CHXn6jiF791HZdPiXbAxH43NTirxcRuG8wswCphBnH1nj7N9D6bHVAKyBcDr8y3JX1eedr",
  "key3": "2yWS1VqDNqbQ4MhqD8cL2fMfCzSUAV3RnMefejdcKotCRKNLE5Jf9sBnkujFEHh32cKscLaooNfJ2cdciqKQwCqb",
  "key4": "5nhTsiWZJGDH51SReHSW7xqXp5FYiv4VWJYqeThtWLBkym9GTDNcU5GdkUstEqpPDTAPtXnnup6vkQHiEnmvdxrp",
  "key5": "5RRTFo85d7SH9zcu8cyfkpk5dULcoGDAqAweriNdsdrDQGtrK2Bx1UShArxGDP6DBvXXECB432faepePVjssSccS",
  "key6": "R9cg2PRZkXfVWoLLwr7nxqSuTFrae8RbpShojGgHt6MHWRkPR7a3dXAcKfBZaAzeGJTtPrx81t34G973JRmy7sB",
  "key7": "2GjTGxA8MwH2Vq7hcSFHTRNgNfeZs2nkk4AG6Hhrf1NTWQz16BDFZMde9JN4uGtMP5m6iDSxCemnFfoqjDdq3hB5",
  "key8": "3SKCtvebCJvsv1ePMAGsKxbD4r7sLXeauLFhfLAvNFegx4bETgJERWHeQj9ptw5xZp18tmf6J2jPtBZmjLVz673h",
  "key9": "5JA4B6GZ9nTkStxvg2mC9TSZyHFN7k4YdzpzsW6RTriBhKnhqA83iCyXBBzCcznXHqhgZuoUquj8ak35vP6MyW8o",
  "key10": "32iZTCs7mi9FCMXU8xWAuSg34UmezfiY8rwec2fxTun4BxQduYGGQLuXp9Ad9jjSqRmuntWYURLhg6H4Han94nsw",
  "key11": "57iSNFzQJ1tCL1zH1LAWekPcZrjTkZM5hPJqyDu8BTmGxyFjaHkKAh6YaTXj51uL93GRGfFMyRnw12Mc2vE9TnXr",
  "key12": "4m2cT6FGQp7EN8mDzH2GyvMNwUmRrK94pXsuST31FBY1eYviKaBpvH6TPPVaync3kM3GVjC8oZmvPxGix5QmWsgT",
  "key13": "4EGHfEy1WWKHHeJ56zCgzYaP53upSHSFQoBVe52VupxL9zXGPo9HtkyNFysgZNR2fyhw4KHg1rJncE75tgFE1pPG",
  "key14": "4wAW2EKKuajbwRCpcDjsreiQGaiqSxQ9bhtyyexhEXv2i1LkPMiie4QiHtpAUjjD5b2CwiJ6Z9v9t9B6pKJiMaPn",
  "key15": "2uxeFNQUFd5d8d3vqRxyLLGaVB1o9QGyYxP7AoTYhvJer6jCohFepf2nEVo3PCMCNTCpxVSNN521bM2fo3xDrhna",
  "key16": "3svmXBrjMqww4LZvpHQzMt3LHXKUYoNcERePy26YmPuon7n4pyn9UozabrdtnTrq8PSEwSYMzUpvtnuMUUuT6Rrd",
  "key17": "2UMYDZ1BxC46MD1NmzbVq7DiE9SU4gkDsHSRG3TScWVrxTrYzJ2Acf6JxAWo92x8sQc5DsEwUPwE8bMuHTJuiYGH",
  "key18": "Cz6C8oR8qat3SKDF4GqMwgvVAJeDXvG4YE7SutheBigfWTBNUmUhrzCDngmeeimSnP5crwhXVSHrFBFWHPYnELJ",
  "key19": "2PqxDzMAFX8Tc9FeC1cso8WWrEz14Gtt56Q2MVgwhbdD6G1oyzSwFMJs4tvkQKZ1rmDvuNCV2gxvdZSNWtrNxA5z",
  "key20": "PsXD6qAS4tqYCzmS74cwGho5BbvgogGR9sFwFAC2LnnB5TFRh9XJYNBTBa1DDmBoHqtjxnd3m9NrNpeAYpbkj3c",
  "key21": "3qhn1SSnuCqXNVRhmKPQqPQjHfjzu8Af9enQsPAFNLvNTESSFuKFNzpfKzfTyYvFbULZWC425MpMjGVH2LgwXxdc",
  "key22": "5QUQs5boDLhKRDS5xPioLAsD5rpEsZ5vvKqheYPJ4oSQwYPZN8iGxR5K68FaRPp9i5o8FFyUz7FCwnHZWL9xDkTf",
  "key23": "LSTn6RhgMTpLJkz43tjNt1Y92e3G1BiG441Jhm8iTZmMzMn7D16WeD5jsNc5Ufue8Ed4TAd1Gy6fHc3rc1Wboqg",
  "key24": "4NodS84vsQGzZvNKUKpBEVTLswKPDGubqgDDs1HMRQDU1nDvnRQEtccVBL5DAwtzybLfzAD1a3PvRtVnbfzdAtiG",
  "key25": "5oCBQPG67dBaG6zTZb4gBBgGFAPXtcgS7GJ5AvMRSoeBCFYjJRvrhMKqisUtNKbSXR4Q9xRFKyPdeKV3toEWjcDz",
  "key26": "5xXwuQbJUsoSLgRqE7NaEHVTAuj3ri8UDzDdkZdJ5w4hPzEAFy73SLe8pkAUZjgye42i64q8rGyzxrFnfzwCPrQd",
  "key27": "BWiWRfosfhT5Yu8HtWNVXLNNcjqdwqEEoFNrZ6baNhDAwzesRUrWm6Y9dJw1EcCr8YG9SHTaScNWMPofmXnrTjk",
  "key28": "445rwWnjvofGPxNkqZ17QNhsrwUNAgtM3QQdzga4nzJmAxBXi1jgWvCN8pf3kze6rvcm1KZT1m3fAvT7tGgbWbGs"
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
