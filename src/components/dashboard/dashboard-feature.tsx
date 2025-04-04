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
    "47cRn6pdjz3oWtoXgDzKtGB3JFGTmfWgMasUVExGLd41Sw1TLmsRHVfEW4Sv73h1YfdFRZGJcSR927bJRZs72pS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GzDyht9oh8snQ5PshX9qMuAXxhStfhHCCEjPUya7RBXBoQbedQVTZyeKNMvormF1sRJiitg2wpNT8Eaft1QQCed",
  "key1": "4Gzi4JGgJPWEZ77Q4DMv3qFjnFFeubwNHWNqkyqKE5fagRRZUNzwT52dZb14wkHkafkyaJre1XD2nyzCm23t9Tuw",
  "key2": "2knvRNqXJyHa7hjYFj2zviCNUa9AQ8yWhEaBuVoG4yB6vbi3FS1MZKH3xU827MjM6Smzom2ad3L1N5Lo7mJjbBd4",
  "key3": "59NAzMDN7rDRtF4ZbXgJQkqSboErwRUxxsZsUSRw2VRGyxZQ69hBGN5FBzFS7S36cVmCNH3MMUUKpAwPgf1rto9T",
  "key4": "4wj53XkQX8PAqvrWH24KRGR3UkZsdqcsEFcNWvSVhMEdnN7EiWTPrPhQTYefEVrTqUjVHhgnszKJ3MCAfhpXgMZw",
  "key5": "dQu54CcyQ7AsGQX5D6URYq99cGCryG5tjzQDao3st99SghUi1tdbqiJq5dcfymrH2LRTbZAihteQ6PVbL84ej1c",
  "key6": "64jYoe5vkTbcyfuAWFzBQ7VqDmwzGr1xc6K1qmPUJFvRPUR3tbM9Xf2jPqgxY4VLF6xogvyTvTEGX2myuYR3W8tV",
  "key7": "JtjFMbfN6MLr1AeMoUtTZMW92ARAtcxptBEekwuSDC5YoRJ1rzAsGqL1f8VHymERi84RmGb4qM58LActjx8A3HW",
  "key8": "42qVUaox1qSC1Uiim4anzbivod7jephmGJko8zpMTwGooTRcH1xaU69YhvX62eGKWtGmz3hcHMwtTdaerua9r3UZ",
  "key9": "PNFCZUETe4gCexzL4Cy4HpFEgANHEX68zVqhUnFotgXmJwWyPt6F9EdTjUx96PdaCZhifrVjcVa57CnuaShJKcy",
  "key10": "43E5ozXNiiQCc7QPywKJBRNhFf5w78VH7fRK9ccByTX3spb2J3FcwUonKAepiNpxdTkYciGv8QDnpybNwdFyQwjY",
  "key11": "GvmCZAJoE1WmZns4zserMdX5oHdjFwc1azD7AXVWRmzsGjzS6ZeJyWn7McEbYgny8mqGek22NhsinmwmHWJERtZ",
  "key12": "2zm91g4LGCRth5mwnewLBhRUCjHS4HTt1J75Fc45nCFSXjLYhBguz3sN9rUUXK5J2KZKYSo56mHphB4ULSXNCkAP",
  "key13": "4Dh8fmMi8hC73oSZfTs4ms96PQfmEQeCSsETR35w7LTZUg83Rf1vqgFFGaiAd4ZuUHe381gEzSnCRC71xjpFsVV1",
  "key14": "2QakYBdqoUUAaHZAkhwa7m9hNxH48PA4WG7UEEv48UqncjEjjLeg9scPp3MdYqdn4XDcQpPDn1fPM1Qq4Tey62YN",
  "key15": "2UnTty6M99fuytCcAyFncruDAigt3usfqoVYh6Pi3PXmTGF1piCEdjU5UcSHejopKbk1V1FEvSQWreLj8qDKuYCK",
  "key16": "2TA5BY7gTa7a7eF7ijSDJMKkLkeqryft5kjkAE1mudu8DpnX1P8m9auU71nAYj22CgS66bmLNGZeRgJxrnts7y1Z",
  "key17": "346n58nhR4G7UTjhGme6MBwqPuPfVHt1Y7gPc8oBBNrwH6aDJdcdjGxKYTMihmXue1U7CXDEPxWF7KJSxrFRrDnx",
  "key18": "5T13hvFx8rA1Jns6z7qKVecNfspj1jeiuwTBv1c7vf8boYL5YFNrdLo148T9sbeXNEwinXJzr4wVjEJpZ11r8pHG",
  "key19": "4SBFWPWXBRDR1tZ2TJbsdSbii8xSWZKpEXHE2covBRurZcgqw4igP3nhgjToyEbB4WYDqnowp84tarRmMovv8SdX",
  "key20": "5yNt5DafkbjzdDoWcDfY66hgAUZfTjkAQjLSLYiPtS4mryvjPQhTzUj4kZGuE1zKrSXet6r2eRVa5N7Adny9TAzk",
  "key21": "48wqALzR1DTdhUDzL9sHVJuhgUs8YM9n3GwP5BZ9XJbaGnTKJF4T5TkvLpLwvTrmkFQmawuCJUh9HusVNqt9jcGB",
  "key22": "9Kv4MZyLyvWX7ka6e2uLZrpER2isiPHZBhMAvWje5ohdG2zKXTqzg8M4pzQGEViU5eDQjV2YL7n6nDfPfe4vxZC",
  "key23": "2BbP3kmoP8BJLEX2Gi3WZBEwZeoL3QEYh8qTUH8pVY8FvTX8sdGGkbknfMuvp1BvQfXxVcanQNx66EgJshVrSJBr",
  "key24": "4eXcz1hojeke964X4Rp2gV3BWcNe4PiSBfh2DdNJDDVEYmfYcFKkAM6idCcvBf4ZUUHJwy8mvtxKYkJt6Zfgtyea",
  "key25": "5ihqfjZaJtWG7ToTXj1WDa6Li1B2zn9s5EyURDRuvw49sFcR3Dn9ZdHk3RzMbuQ8nDBDB9dr9wL67vZ5MMFuyD1W",
  "key26": "2MLHZtZRLEUhoswxDFPFXHnGrx8UNbrEFCCw6Hv4e8GPjM8Zf37TBbA3Sw6cLwp3SMuZMhmYVe4rkwmJhRNCt1oW",
  "key27": "3QmvmynBapohJNFwVzcGmshNLVPDdH9d6ByzrwPikobVktGQkVvQHSPWHHrK8cuJroVeXDnGUb9fkZyFr9aaXd1e",
  "key28": "2L9RSyEj9p3H4xe1ZRCKhLhRqGwqcntL6xjg6f5br5x2j6Nx2GCoyu9qwvqMwSTeYWQTH5GXRG8AZ9dAirUTKAg2",
  "key29": "2FBjEy5nDTFVN1UYEAK7v6ru3jXwb3HhgZJdbuDtgqmK3TddYAbgPEQXfiCnTL9uGRHXznrpzSE6p3RQ1npPpzoL",
  "key30": "3oqk9Ja4AhdfdraoX4cQT5LZYWTfHTEwqdJzpePVfTPaww5XQUAP8vuhLv3Pc5jd2NSNT8SGvg7uHaRudxMekMmV",
  "key31": "4STdRn8bmpYJeauAeC1swJwEM1ViJYAiW4zhZw6LnjBA9MHxqxXHVk5gJkchJXkNHwjqNmmaNmk7Wpz5xkNcuMCp",
  "key32": "3vtU8jskmLYYc7aYDpifhhyXQwDCsGHUTsHS5fV7hA6cifRSfj9udLQpiMRYTouBTkrLq1tEaKCaC9dDGYaJ9K5a",
  "key33": "4y7gw1B2H2HeRMvi9mNmkhWRMo97zXzwuUobyLRW5rfG4wp1aawtT155GafVph5wHpom8ddywsGfAjBNj67gWc6X",
  "key34": "2iFM8S2eAdV6dj68jkgY8UmebRdxAuDmCsD3qxYWXE8BPHFedKfKwZW2pjaVcT1MvMMEysAEAuciUuUMVsut22ec",
  "key35": "5wrfHG1Ypk2fTPNriA9Qisb38QVwEYTytpEXwVRGsEnBWN6a2BXqBHQ6PBzc1gCLP5QApYW3PdZ1uS1jWwZp6HKE",
  "key36": "2JATomjuDV2ec7Hwj2T8sXw1m8jZHqnJegPt5M2HEKKYMivQiPhAjS4xhfjCQ8Bgy5H9Dzojiq9HhNECYdbwFuoi",
  "key37": "3Pt98NoBCGPp3XkmEJhYBVbkJ1gq4G4Le4iUGdJikDtgcdsewBBh1KqXN3GLjFxmn2iHRKXWuEiXVDiBgv7rrXRK"
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
