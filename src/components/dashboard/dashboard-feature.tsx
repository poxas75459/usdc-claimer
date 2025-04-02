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
    "3SUc8VPvxKKYcQ1gSRnPgmczhVTSbDM2VAeidoMyhHNz63PBk3dxvhJ9x8B7mmTauVxxNSFrE6kHszWXMcagNbjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56irfAyzz7s7GR1xxo8gwoihs8bJSofUqST3W5bz8JoeotG51o8nGHqpDKEVN8pqvp9yzsckbStUrFMXGZQYxxbw",
  "key1": "jDWAYPFrJeQZczpTWFUqaxnb5Go63DKAitHLqijBx2HSbRGxB3CSGj1CAiAKXDmW9u7iQwXKgaiY9D62oCrXhNm",
  "key2": "46ikm6eHHWqrQcqt2XassmnEUMms9fGM2L3Gwr481HbLXqVC5kPaEM5um2hu8PTvbYTuRxB3s99kmEV6isAM7wiJ",
  "key3": "WWJcvSQF9PrAkEFj6mh51j4X6xtnN1wKobikpH3Bud5KgHMytzBA82rAnGvSTwFoAN7Cm1YK7jpDowUC1Ti4c5s",
  "key4": "2foT5n8amG2d6jz6RZcGa3QHdf29QWukjQrRgsCcD6WXxa2L7AmEa7xwW2FrwuyQGhFMEtgJTSA1YnDSHwsXV1CB",
  "key5": "4NjdLLps2PNsQ3HCvvK2iNeWzFHdd2bHoELtZkUwwtrK62echzc3Uiz1ji5ZmAmavoTkBivPMkrd5m2XrDoDGzL2",
  "key6": "2JVrqhsmcd9kvJT12j5h6MzieCKJhZyYjeg1Q1jPnawxcpGd6z4LWWnGNWb17X84hcmYdeLKVmCD9TmbQQaJbHZh",
  "key7": "3KjnXMNQhxrM2p85XHEGZM4iotsMb5AR6v3axyxca8EV3DVECL6zLtym67krW8XeH25tuNo6gVYUXHKPvGdwKDfx",
  "key8": "4kiPhGPnYoAKLSzRbTUUZWnWLw8gZuFq9fkKrFFvfszA9AZNNE34gNAyeWrMonKQ7kiyY3CFNk7mkpXR5ooct8xy",
  "key9": "aoVFKV6s6pfGcS4R1Mps7D6Yh7w3oQEgdy2KEGTo6BXGkWmfRPFxpNByxfkRU5WVSxMZcPzYJ23Vtp2x2rFRq2c",
  "key10": "2ME4YRhxz33eghTP5ijY1x4xeaLXRBEK4sBHhPtVzzbWQCe8voMtAZexMe6Jzbrz5B9aaQKupEoLVqJGgQ3uKkHZ",
  "key11": "51PRpSJDojnFNcEizNg3LQjSa6qg1sKbvgDkCgSkACZTjQ293ffodwUYyGNNysZPVUeSC9StLs7f2M6GYxfeei2x",
  "key12": "362oY9jCw4Gr5ZPXcNMnACGk9jWAnijCNaz88aTQRf5AruKkgAHzWkFqH5BbG72yxrVckecshMiJBHK6YZGe2R8e",
  "key13": "5dVhd1DEZTizCTHtJLcKS87tVEd9yH47xzq7m57Ngw2zjcABD2ZKnwtDmRCXTpkkKsq2PUQPUttAvHW2pVLNVQ5y",
  "key14": "5Rvw7HyecdZoqXWBLpKewQ1pmtvWcDToaGK4wU3wHiPZudWFyQcivsWWfP3f7ybkAHEMJKygespKfUpVMsYppbHq",
  "key15": "4KS1gwtBFn5jhwB816BToQYk7i9RLMoKVVVJ3em3iJRkrsvF8MadbqQktKyjFh5r4etk8bvTviKbdQv9qzNRoo7j",
  "key16": "22Q5RLPfoTQyhjFqUYhxQacmbttpj8Mu5oZkKD7BtXp1wkKxhgcLGM2HqXvP5YLp2kxu7YpP3wG3N6obsW1UUn5p",
  "key17": "3iPoSAsD8qtPYthhEe61XSTBWz7LFqzPVjD7Am7uBEvcAyXzufBWDHQ9Z4up4zErMEhzjyNmZTbdi4quo8avJncm",
  "key18": "2jbL5umKVynpUd8B5q8oKgrRUtsEKm6PAHjxDzGUy1euXQGz6SwnYKcZj1rK2jdBwAn5d1kxstriktLcN8MKdHse",
  "key19": "4hwEEqXF4cgfCNSknB2opLBJETDzihgLwPTNnuDPEH9kxh4wgqdTdkHv3LYAgygpYFRenV3nKUwag9sbhxZnhpp2",
  "key20": "2TjrbV9CVjkxr94oDvcm69CxveWiR13t38LYJhdncohh7PfvKcgHyKQkTfFjL8oiTpXGVDPSuCX57RJgnf3y8MG1",
  "key21": "3m9tLdFEeSZge62TBn8Ls5xaV1j4or5fFSEtB3B82B5KLjSjX1PHvuNwdAH9x4BN2VTJZEFJq2njd1PAGbeBsbZW",
  "key22": "5SEhqGQ2N1q5REaWyUDB4oGcSS1xBE5y4FLstHJXg9bX1thB1swf2zxyjWcwqh7778urBjeWWhXjJ9NPHr1g7tdo",
  "key23": "2m8VLs3ehgeCeDbT799xUxBJVDHMwyGkn3UgtZar5vLXDQ96NPf8UhAPrDWXm1rVs9FMZ6e3SCPZBqeqdmSnEHjq",
  "key24": "KoRqKoEPDRbjmb5NHcTBKWUtnGcLetQY8KH2FNq5FzZf2UubC9DBwYM81Ky692zT9CrxhdWusS2513hJSr2VgyA",
  "key25": "2NRcWPGx36SceBpP5wvDNammefetKJ8C9cub1Q7JMYEMcZn1GoC92YUkqbx4PgkvXRvJ96a4VFWgLr9EtPqrkHiq",
  "key26": "2dKM7KXMhdQqz1zWjRJ5Tu5gTBjAK52PSzbHathSJ7i3srNBFWuaw1Sn9TY6FbZJXgqEZzwnGTtoxCbg8PEvSMDM",
  "key27": "4sgDCJD3itnwqoNWgAv7VNepNDXWQrSivPyVQZL3aZZJfLH5WhDkNnsWV1J8NdkuVc5nYbYSVegsgrCbwhY7GkZN",
  "key28": "fAWBFFAnH466AwDvmN3YgEX96DriD3QWdnVGYdrdY4Q2EyRSkTTpE8vd58oNihF2Gk3uwG2h3TLXph2tBEu9xXi",
  "key29": "5PGZopnhByDPt8gKTUV4fYd76LcJN9t7SVS5JjTchK1QxNW5MckUXDtak4GRrkeZqiRGAJep6bzvzoNwD8tz8Mob",
  "key30": "36gS51c2j7c1THnVq8UWEAZAw4h9TSgxduHMzNGeZn1iuB6aGMytsT4wLn2qjAZmb1R1Tkgxe6iN8J51NnrHdQ2m",
  "key31": "4JmmGios2RvqwBo6vNdoxNeLgjWWJKrCFyatCBSG5hmcN6TpbsrMDAkBEUgGpL2PHbmt2rDjmVTxU3CFgsp4RFUZ",
  "key32": "34WZS4QsW4Cw1v5EPtuZ3NV1AGHq5UTditQeThcYSR8r6yNkdQh4ky3yGLWNbDxtTBqQrzcPUc3qpNxt8Xd37Q7P"
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
