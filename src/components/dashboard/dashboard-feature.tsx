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
    "5RZpSezPwD57b4R5QJrDNdXS9s3ABtPzYZKEYf47JbCb8wt7pFX1Vd2k8RGUDgXQmvatLRcj82jhvwwqAQGWfjrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VAeT83usBjyYUBEsv46RHVMJX6JG4hXpfiYpuHkpoobdeTAt1B56jMWuKjU1gYdiuQQeRsxZ16PEJ8RZt1VRNdk",
  "key1": "2ePu2tcBhhsmys7Lqs3G2TpatkqYi3Cn7qgEuFQQRPSEgQ1GMchQoMrmZCDn3Pd7NHZm3jSBTZEhbhkMwtYhmb8J",
  "key2": "2fBW2YWYJKh1Bo45yz4ZmbsJsRUZa4ZNXmjmUJPQuvKVf5aYuP55vm9vvrkr5bqRbkD7jGrmHF6d1SPpHstxPUdw",
  "key3": "4jejLohBgPUY4uxxcDs1WYEdF9p4XkhkeDRW7bZouTswhfZbyUdSEx6Nh1WFksiGqZjqS6qPaSi64LVgyEyZbajD",
  "key4": "5xgRd4tfm7AEhyAQ7V8bZUJX7hSnY1k7N1sejaPiTVPKSf8eLKT3XFur2ybYyeWBsUhgdanSAqjY9BDJyrfLksEa",
  "key5": "61Nu2b6w5yuZ48fTgXdFQjLKubLSKYyEnkCb63s8iPGqcHvw6nspHp9GvTZ9e7EbMLJuDy8tjgx2mzpqUQGCNLP2",
  "key6": "5ULXyyC83Cmq58JurKxvEyH2mHcvRszND8oLokfFac7DqSDfQ6ihM33o4j9hJboTExXBRz7MByAZVWAKMAQnN7s3",
  "key7": "2U4gMHbqE1j2rYEQK7t5wDCwBGFKDzYJFpEbMsgeZU44maJwJP546aznSGp4qyd2VDdgCfVuhnXMHMAQ2DYqbG8f",
  "key8": "2G1jEBAwZ2rNndCghUaGRiDv6kSUoVCNNhtJLLGDfM2mGt4L4eLCKftGucN1xRA9Nu2cD1ccCSJXwMmcRCLSpLU3",
  "key9": "CSCwaeQi212fCoCTf46E2J6m9sXrnq6HvZnH3vrSEeLhJBWBYydgyZWtBNbFUDE7a7Mc69bUVr28ienqkXaX5bC",
  "key10": "4oHyxTFoE8SX2wzvbQXrm2xGKrVAHbbaszyBfJebjxcBb9TPkcz91bUTieiTB5MikymaANzVD58fqxBJGsxeHWdN",
  "key11": "51ej6CFBuAgPDziKbzgjnM8vNMvFR7eZ1jcv93hRbhVgk74TTP6M1xz1qAHNygDENHWkuNfUJt5wjbtt21dVyfiR",
  "key12": "5broXDD5KDhPL9KDSMDaEudYEucC2Xhs2kgdZEsPn64jtM6jUBxR1QvQo2RzgyzZgk4fMqyaGsjUPfz66ZBbVa3F",
  "key13": "2p4Cy91s4QscMPXtLNhaeZ86hzcQeWCUHRmNMs3UVYP4E1YGhZGZzYvTBD3J8eH1eVg4iTtaLxPeFurbHp7xN1wp",
  "key14": "5iDzf3s1AfT4TmjBALaAQtnx2QVfHNg5FFf3G9TEyvHVvtzTQ8GkTXXYVXCVBLbQfupMaDohtyYqtm31naTqWjtj",
  "key15": "Lxn9XiFFRdmQ4BTLV8WJ9UzQMweRsnw3hp6ht4SSAwGcrk7VhZmJTYanmGEEC2BZ86WLUBrhHUSiT8qf2UvJa3p",
  "key16": "62oJay3y8der9NzVrAbnSxW2kThtETUqafHaWecwu21gLU7Jruuz9cmDc2mjNiHJ2eUwgdSs8qTwZYWMi8EMbtTX",
  "key17": "5BSEziyiryNFXpVr1jkSv8MRNWU4MogyofjNfSfpjgdeqoF7CvUHEMd1cJ2ZhX2ux49ZtkDCCjmWUf3azXxwLnjN",
  "key18": "ierr3ngaekjHeTjdVtTSC1HQkZUzuZLoKhahKtCrGTVLs12SUuKLbBWhJoWKmuXcyJyPfd2YUdpd3j5gm5YG1Y3",
  "key19": "PJgHYQTupxKQf4JGfCws8ircPEs1mgXqRaJaa3Ym7tbk82YiX6YmuMRs6SiMFs5iLm1tKMEE8s7TqdpoNJT1dLR",
  "key20": "4daG95uQkaHmP5Kq1PCzxPXpAsQgLDKgmFx6dVfS3r2iEtUHJ9xLmYQB7WDmkh9KFX7eP6Mu8WJjjsngHSrETTf",
  "key21": "DmacL6vZPHgmqPr3bXvCBmntjqL8LFmCXJ9a37UYQtEU8T6NLKBfFqok3uT1nWw5HKQuochvRCRg9VMrieYfuz9",
  "key22": "2CKU7m3JYqzQy7BHuFf7R2zoq3vmKygLT9w33HayAG4WHgKYGM8aBf1raWEhKhegorQuo4G2sXTUbbw47fe8yuiu",
  "key23": "k2BbeQnYCAiLNZQnu5qk8LciCespdK6DCrvXTygdzvgTTPJ8RoWwZgcvCYnHULHUhofp34fCVD7PwA45tJipjSS",
  "key24": "2aHfnH8jRMEuDdJpE6JkpvboS6ivAQXgUyuWkYfgGAwxaZxw4E73JkPFrWkssmDpfDfgwK1z1sQg1CiczvGmnKEX",
  "key25": "29CaTHtrfrha15kqRZA4HQMLZF9F55iiqXpckdeWpnM7vk93eVPXtXGuVfABXRrt9UkmxH5AMjxDiHqWVCVmLduW",
  "key26": "PNPRk7kZobzUUEE6V43S7NCRvVi43MgQdKqT9ncfcuFUUKota25tc5hSu7MDV61NfG7ABY4mse2JVrUYDhCAg6q",
  "key27": "5sM4HKQWt4Qse7TyQC4fVx7FXKnQPrqamNnueb21Rtokf7eBA85yWsJyERfdtjEdM8L5Vee85172WZ8ovddjZtVc"
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
