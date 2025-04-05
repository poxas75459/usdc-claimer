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
    "3dshLtSXZhitw3CcatDEcLQP5ETcn9Pvekqk3SLJRFxhgRyptAZCnRWtANzE9ypzLFK2YLjhMeq2fiH87tVeCjP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pe7bhGwpDXoAe9VahkAGFRLjQtitStLQ4zqv7ULy6KyehTzNjHeA81wAxKo2KbH1519JhfkA1cYjW988D57K436",
  "key1": "64n8zEKtYvWZQKajifwsH72V7Xof9hKfbVQv9rxqDJqPszp93qBKMLaB2YrYipvn3hoMPMHSNMRf11iZ4FtfGxeh",
  "key2": "49uvswc91FL3XRFv3zMdC51Teso1xJnPomP5LVf38Ur4BLdPdsY23yW6LUT4AgUGjJwKJMCttsexWRKT7GBHSZVm",
  "key3": "5VHwLR8eex5bBBoxU3mfiTyVpbwKThyKozmrJEqbFoULARzxtPxvW3nEt3kU4nTcv8p1cMSShVP5XE8cLCuWgeGt",
  "key4": "4VfMyzKr1z4gcNkJpooJjza8xJa2FRjiVRQZrWXqy767K8P317vrYZ2PS6F7pMcjLTNhvRRzT3zFDtG2UDQKoo1m",
  "key5": "3m562mdc6yYqyQSsoyEuQwRCtWBfuJU7JskFnuNDdvceLhsauDAYufwnTcu3Bz9CYpRV3tbDvjp3GwGmbsuCQuTE",
  "key6": "4cgdun9H2iDF5CmiSBm1Lhj3Cf4c5EMh7kE8RNcpy3tgRNt6uRmArBQHQB8rg9hKxRGqfQhArjbXUJ7wdLdFbk9c",
  "key7": "2kPTs7yEQTFTu3mUrV98gh67dGaGPQ8DZQKqhzuCXKRH73Ajfgqdyaa2VZcVMXt4Vwj4oo6Nu83UvsciaTWfCCEe",
  "key8": "52Zie4jHL8XV8mj494saEaPVBG3FNoRLd8Qn3rZLmkAwQA6hC2nWtBiZszm82bbudtus6L8Zz3wymrLmXE9vWpNc",
  "key9": "VnqeaLtD3BqHd5tDWyb31SZqFNVtzPWw5yXRFSoSB1es2q3qz9BLqQocXvaMm4YVzfdSaDc2LyHw6PQsTpf2bkF",
  "key10": "4tUT2PWFFuQ339qxYSsTBmiVVuvB1EfvX3EUofrP7asoLZ2poVbynA1CZbeTCtWmvPp8g5hM74JnSKZaC9TU8RHa",
  "key11": "3USB6ZeYnCNbyv3PsazSsXyEPZ423Lz7eqpeN6z3WSS2UBiXQoA2GFAYULr4fDttHYg5rsHW1F9xXttaE47VSFSu",
  "key12": "4bwWFm8s7NHRSnKnKcdMzmxbruPvgagdpc74UPbdQzzhSBwmHGWDqWTb8n7q5vXoeptwuoCzdJ446th3yGcG33wC",
  "key13": "2bBK8ViqSaVGNcqy2MfHPE2ZhaMaxZQEbHwkN7x3PWMJydTaT5pg8REzZVrQWYFztFdxBm6xGSFfK9ZQvVAaLMtv",
  "key14": "5pVwW7mQmeCTvgPVbKjTFLPzSDjNF7zE3W644iCG3whLR3kNW5qMXY98XF3GKqQsXpXDY5g2mvpAirL8wSkgFPLE",
  "key15": "8GeDHPbg5EuJXFn9K7nFs5iL7hma3keEL3Lz2NiwQb4RvQJrg4qUdkigVHkgdbu7oej4vNvTqfFhbjMEs3a8R9i",
  "key16": "21sk4zXXZnjtmAoGGNNTJpVyGUYq4BNQujP2bMiM1F8e9m5TkiJcfvkatVPVR36UHBgcDLukV6arFFor8sKScWT9",
  "key17": "aF3Xj1yJ5XYGEnm9nBGU29kirHH8Wbn7dksyTzsN5ZkQhhNk7p3Qq2wp7c9QVLvie1Nb3XgdssjTyZhVYM3WdXM",
  "key18": "YjE5aK3B4UFWbSFGtiQAW8hwpucN5c9pTLojwauNWsghXi1pfRL7eTy931MLyVBp9jmAzBTiC6HepdYPJHjLAYt",
  "key19": "3YPgupniL6adGQpo3urmeP9f3rpjKvdpEerndHNxujdAS5fkbad9qTLmCozu2zSW3P9NeibUUKYHVuh5CxiAzYa2",
  "key20": "5BD8BYpzt9jY2YiMPh6PnP1EdDF9eeRSczDwVTqKXRBnG6yjYuZijwkH4UVmiEMGwvmdtGSpFsViSzHhXuhoAtnb",
  "key21": "32Sq4H9scfLJ2m5UQS4Jm1nUxyq2pqyRj5KiGRnQKWGVUnVSLHG4HTmk9u1EGLLpo3GgY2RsQCCJciHzhvcp91uB",
  "key22": "5dSunCj1h6KXxYt57KBySnrYbc4etwRKSsMCjsCQvXtyNLzqppR2V7ttTvyJL8haB8cWQUh5Y8efiY8SV3j3mACY",
  "key23": "mEJoDmKiStf4tZSYyKaaUknP56Fic3NifSqyi3YSreeND8PBaEVN8iSWZSTLtZgPm1VpN6PAsno6Na54wweBhMt",
  "key24": "2Lvj6x9GnknBsozjFvcD7uqQYLcesVHm6UGutCYP4QkLBN5NpEb3tj2TEPegD82gpioDodJRrRcKfEKnfUTzEaE",
  "key25": "2kwPLrGqKkkCSUXDzSHR1EonZwr9yRNfBMMw7RS8SbUh5zCnvdQQktw9zmnXDndc8UJmoqfMy4VDyJigg7fEPXER",
  "key26": "4Kf6P92KkdWtDfv6oGbHZFzChefH8Ljj6o4sU5L1KocDe8WsNVjBGMR6fPHNtdL3gyQvTXu9MeyoAJtBrHrRGXea"
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
