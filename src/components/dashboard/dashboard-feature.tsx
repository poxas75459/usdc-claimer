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
    "3VFrcVeQTKJG6jJEz72yAUgi11Rtqd1iwzozxHcgq3hsHd8RrjxkLp4GaodkzjSVkFRY1ah5fXFpQC8hWS1xBv4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aQfMHnxux5U2GhxTDTjpsCXyAYTXYWd4BPbvjf7yqBPmaegrt8APEp3ebREQUD8Ay5XDYeKiGcFif7VRLe9hTD8",
  "key1": "4V1fgPryXZhapSGwYGNbqYEnzbexicskaJEaEvsyLKq85J2Di4SLrjziP8CjQsLHiAWekAd9kAk5DvQwS7Au4esE",
  "key2": "LA5o7u9dvNfx1FgzyX3NmTmfnoN441V8345GUQcuniGW2sTBptpawJgFX8jHi7to5Cuq3gtmAc2bsdtsq3Ci8gM",
  "key3": "5NJKY54yxysDkWgZQDMKV76btLhp7sNzkUfADQ3SvAjcFsiSXdk5d5BL3MbcwHR6kXbEZkS7FPVCcWSwaC7V2g4F",
  "key4": "4XfxY6uHXqk95tgZgWNhRscvUJL22NyN1TSaxjWTbAccRJeB1FqGFq7HUWYNnc9ZuGT8q1SeWquLGr5UG3u5hBGi",
  "key5": "5rqzA2XXePN2GVQDL8DFQe1n5dC3yoLCE3MHyaivvjR3wtrP3S3eB31iN2zfU41rg9aiePcBURB4Dw2KChsENkbz",
  "key6": "4tt3CxpgDYkN7HGR3q8o81Ubs8xggFYkBtmDeFrCX6VzwWY6yRrju1KXiy1jnoq1xNe3mP8pjfhCbV2hNi527o1n",
  "key7": "4JTTSPYfsVKLscbq8nWHKR4AZbqiPoSiwPCahdA4wpquoqk2J8oeSbBm43RSopKRcavmcgQq8EYv2Mu7wWd1R1gG",
  "key8": "N4qVNWMYPbzt9Annye2v7Lt9uVimJhj3hVhevBqh7aGSNMw344moCrWMSyr5cya5pTZhPMNiURXtHrPpZZH7Pyw",
  "key9": "5XhM2fnFvkmS5LJFDWziPDiiAZ1B6b7uqNXhhpfu9fdAdsPMmSTZEJ2U3v4SGtYoh3kcyEtQsLcM9m1XEuaQZQzD",
  "key10": "3KyuBFCARYEbReLMZTZX1wAMwF5cUgnVFDXFhDDVn19DupPyFDC1cJwPWZWZbmKreB6Y6EeGfL32bQ5Je1DXMbVL",
  "key11": "UhFctJ7Kxv1vNVDhpxKZAs8ioowzuC5xPvnFsEgYfoWQARhLC4N9YkeDk1o3YZE8pKW3nZ28SBChPhhgghAWH27",
  "key12": "tsW8nxMVDH7cdGmuAgiUf2hN84BXbtNofJWPotVq8mUMNH24WvwiRQdjBovRPCTRDLHi1H2A7ix35fu5HU2TGG7",
  "key13": "5T1vs43u8SRxMJ4axZduXPEJgc4xAebrV3WXkKX5pfqB8Wnh86s8NmKQRQ2bnorrsesyurZg5NGrXtgsxaD2Zivo",
  "key14": "3RAySXR5A6Q7wXLXDyQhPr22xBnU6t7oi7BmroS9wHJ6LkS6Wr9pufHX39UaVwa6mR7rGrYdnS9siqwKMLEShknc",
  "key15": "2DKXpSpT9db3D5zFoJREbM7fQsqntKKtVje7bwa6EKMfVsFh84oCsrmEpfCWogiNjcXHJyvnMwNApQ7EFTA96PRY",
  "key16": "5VMXdx7tTfoiyt2TfRtutZpy7XbTUd7msjkNvAVqugHUgyEDPZRYjH9M1rL85FHCAmCwCjNMSSQ3TjgondAjFqcj",
  "key17": "3BaD5yeQNcnf3femrnzriBfViRFn1PuE4nsuoKfj9TCibCV75e3xEkBk1TTXiWdT7acYASpWLgbnLsqkjriFozW3",
  "key18": "2jTiz6ctLhg6Eq534LbJFCDFXnTxXroMW836c3GZaABhaRjGkNhc2Zfw5PwYK8badjFLUDhDwdr1CTvYHoMfr8oF",
  "key19": "2yygFgzqH3oNsphmFX361SRAHeq1dNmNuAW9KhqhS2hoqUiLLMbCP79Qf9yVa9n24ZX7staruJ7nXESVMyGVaWz4",
  "key20": "WEEfezhba8FjtvkqTEENDkYLwjyxobqDW6pNkK7tYiRfgaqvvp99sgfsH38d7QztfFDvpchNaGSKWjgGXiMKexz",
  "key21": "c7C2ZCo9yobMiSEqJzxTawhHFL4cAeCdvujCzknMJM2n6jy86XP3veJDB2CM1mdQ5PhBhFgvTnhPP4E4ewESb8h",
  "key22": "3MfdZ3MwJoAqrWnwjQPeF8R5MqixCG2Grv5VDcTLD21mwB8DaV29MFdkbxTNW2NJJZEppvd89xms7jREZ1XT9ohc",
  "key23": "rXHxp3FHJbwFdmMRDZ5oKEoiPmfo1UbUAAcrkipgpQbuwU929t4aaTN4R2EcbXqHhGYr2LmZ9bojCExr2tMnKEe",
  "key24": "3wNEvirtYXFav3rFtckA441QP2iEGKexJaH2UDi3WQ1Q4iNygQ4t9VFFdrvFpbyPfpKrZhJwpY4aJjrZirnTThP9",
  "key25": "kVGKmZnqH2hAmXCwL1shoEkUjkEGzoF3xUfM4Lmdsi6YWhpYtnZQXze5ezdPTdThpHKphrENgyLrtTgsQQb88kd",
  "key26": "2yzDxKWtRe9ZpsYGdaCku34nzAQeHV3LzNYZrYbhpjQ7C89JDdNEWpyV8QSZA7wR8f75aD8KpUp8ZjNp5tYmcJka",
  "key27": "3ePiZVEuBN513thGTbtSY97REwwv7hL8BaRQncNpVXY7QTNVNfMAAR7B7AgcqCw69U85jwruGxvBtbCnM9fscoRA",
  "key28": "2Uizm2k2AKG5wDc5RsGvPEnFNjnBURsZpGBXHAvNiLnpM7dECXF5SHwCr5cQ2999rSBDc4qLFCDwRpyb7Ms13YX5",
  "key29": "3AKkdQzkFZ5msKHPH68dJ6K8GBFiz91eTep2W67aE3rdZtrWQqQ7KjUzkN9913bQoYqawfcEsKBAiU9YMzVDdbBg"
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
