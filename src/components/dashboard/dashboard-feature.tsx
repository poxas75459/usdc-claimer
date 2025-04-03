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
    "67LWEpn5FKkWt2iPrLUEpvJodqmLeqmX4zntSJZ5N5HKotGHfFpksHdNVhAhcNrJK8CmoayHk6t3zHXZZUVdD2sR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ThpeRP3JRGodLPfpn28GMHckuEhBNmtvYz5YB8H9f2V48famvFrEWMG4N1JC5zWsbKevHZa7pgDWkiYGEnvzhFN",
  "key1": "4rxC62TuXMVdmtrf8BMmyhTgU2ruebcHornT2ujgEnWnsEkKnvKCJr7YzBemhvhMHCwG141QkPRruD8YxG6LL3cH",
  "key2": "5fdZkdhJEyXQSWmMicKBv7ZpPrenY5waP1awcVtMKBRBFLrWhUfGfKSLxTbwBADe5sYcGqszKE8ixqX6nEFzE894",
  "key3": "yLJTTtaeXQwp7u3BMkKymrLVZfhHNQgtk14VLvi1hfXX7kFzntdmXfCCRFVujhwyQBow3BS1AMykXtyarn7RZaV",
  "key4": "3G3vBWijKJTcfYTdabZnr8CsgADzqH4N6feVG9RpEPWbVuFu1qcs7NzUt2cgh4h6hxWFQdniYW4twUuL2943c8gu",
  "key5": "2pHvJiB3JQfthR7HNB8igqoBGfDP5sRUf1Ny6Tph9ztbqVKZx4dsDDaF5nzA5C43wZheBJAur66KkJxXNfcReuZM",
  "key6": "4bRES8DaMA1AwmEaESGsQkvQSNWCEJSkXagERyrJgko8HP3e7iMhSzDXz7eGa22byhqatvmyzkWEVFuBsxpkg2ZX",
  "key7": "4cKQpCfEk2FdjYzkuRQCPEEisdKKxDXbzaYXhWEsPwGwEk1ygZWdexcG5vKGfSvYvEFrX7nmmVATysKzjS28Aa2j",
  "key8": "DKi2v6vVqBfMNjTxvH37AV7XsiVRE5vXF9WzCQbZRV5yUzaAr7H6E6UBi2o5N8JjjUcvp9UD2m7UwyLEVNQpf2B",
  "key9": "4h5KKszXb8UAY6JUXKLQ2hdbuWBAwkrKkJcRSHQC6CUKpYMg1fov5S6DV5erHFWZBwtwfJ1bcMKdKs5kadZVby5V",
  "key10": "5bn6HZpdV5ZF6M8FSk3c7K2XocdbtcAanZ768q2YtAGkd5sYi7FD4CpmcysKZaoXQTR3pD8FUEULb9WBAZ1Agert",
  "key11": "5Y1u5PLq2YXWHKx6qvLb7kmqjGStCp5vCSWepyuHJ3o8UsUT7vpEwSUGeJbAMgowaAodgCi4ENjvcEF7VbjJTMcT",
  "key12": "5VE8PqwGov37pPQX6SD4HuisbGUfUDGkAdJB4UeohkKqJ7Fk45hWpoNJj8RFRyUjVZPXjFGrxY2rAzzN3EzQNLto",
  "key13": "3HBuhZsNrP7DwSM38Mhb2XL6qLBwkCjJ8MduVSycctuq2MBBdMxhdR2dLFVk3t75iixyB137pzSXHzeNYBxvPpDe",
  "key14": "VmU4LmQXxQYNBJsbV2ZoXRG2a7z7pVvJjnkGeZLTu4iUNiKFtUaqxru9CPXxmhvrduyGaL3Lau72XZZKFPCmSCc",
  "key15": "2QCuLwnN53bRAYQE6aj1Kb1MLtbADydRaHJMNqc6AgPydwWx1sBucLRs67983Yk4ACXKRTMphF4kHfTaKnfXgtUv",
  "key16": "5QaVZ698FgMMUcvViJoA9qKpk4kQTaJrDX6ExupowNX2u3qbZjYAyFHMinYQfchnXXRPTqkEMXBGPVJK4ushFMCa",
  "key17": "5dQ21wbauXAqa8Zo94XQW8BLda9TFEAMKDkVPMLCqGWUnhtoeB7zuVaBvP41AuPMU2SoTwAtzNYMntg7zb6aAsZq",
  "key18": "3TSGQxLB6rfkMEH9cmMv6ZJnXXfHt4nZNEPBmaUk2V8YAXzt4Eqp61zZeihU4FNczW7cDDJftqX353YJm49bnfr6",
  "key19": "2zcRMeMXVk9dyuw3nSZC6ivz15UVuRB3yVguBSVXeN3eHMD7mKJy5dwwwaFGLeALX44EbjxFmPmEFYJj5p4rFsc4",
  "key20": "3yXfLfpkYGHdn35xf88re1hm1wU5KwYwjWMZLc4FjR7JXzoHCqnLVRYJY6wbMALc6j6XnynGvrwMJp5pb39uydzG",
  "key21": "3DrYo6zKZyQJYVKEECtg4QEhNXnQ24VukWwr1P2HhVQymwxPdpHk9t1HfHgiVuoR2fwnTMTaKqw6WogXYkierg8F",
  "key22": "22x7iHY1h5RuczgpKEBpD8c4tSMYD2MUHaun5WqG1MKwZVfRufFWXwjfN2hp9B2pd9dixoHo8eA72y5fXiMDi88L",
  "key23": "3f95ENoRMCrWSeniY6mb5QCBPYzzqQx61kAUm4wFdETBVGC2cdvHSvfjXofm5bGQkKzNKLjfQJN6Y25trLnchiiZ",
  "key24": "KsBfZxz2muRahiCxKs5bG3wZF2bsxNpGFTHjTfqWRVLAmPfTN2neJmwTxaCQYt9rJtF2zRWtfBqHHkAFcWXcEp5",
  "key25": "pH1XmPXLPHZFXYDRLZARCNBwAR4c8gMeqY9LoE4cFNzPWE852Xm4tRhhtbXyCKbwNrxMhzT8JpfrjbFnY8FjWGH",
  "key26": "2UxeWQv5KRo1x8xDNhojfpufDurPMXBSQtuKR5vs8pGLeg7YU4rjr2PRX5ZWvqtmYEe6FMABkeDmRA3qLoLDDYaM"
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
