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
    "YnMPnpRhGKhrRck38EUEmJ6hzCQiR7SRRBMC8aTsvpSTew6gvaveEXP3eYB1N1ev96RmDcFwKA5RQoqphR1m96S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32EBa1urnjp9KzjgruewDcC4bbUvS3WtHofyW8tqCam2Jvde6SqFgbXWozTJiXXbyU9HSjKthbJe17JDco1MorSx",
  "key1": "YCW3f98NpVSEf67iWhVZxzjL6rgnApBTsZZ1vjsjYXtEYAfWW8e5Bf2BHsHSfVNDk86TKrkSHmNdma3tvXXBfxu",
  "key2": "4YHFiEpZ8d49NUmz4YBrZBFerWA8aWTxB1rcZkPmSSKhk5ds3Lm9Nibd5P4vVrXykxHFL9rH3MtaFaPJRRyqv5uX",
  "key3": "2t9Co1LBksiCTXmjbZKysL98hKcaLGKpEYEEkgXUWzCnnswRthNGNvu2rbAZU2K5PvFjn4MUUqsDsaGnZ3j4MJDp",
  "key4": "5gxrWJw5eErAEJeFbjwysz38gk6M2tA1m5nmZzi54daSinqJVySxvBpqotvPuae9FBCvQYSHzbD3fqrZkQb1rNUe",
  "key5": "5bfbvi77XnLJvTXS8H5qNr1B2f4r4ugqjPaz3pT6QzooTSsJTqZtJF5P8JP1WwJeqGFuF4YD1KcohydiWjC63LDs",
  "key6": "5aAWnzvZFcLxSLhLdLkJ9dGxjH3ox7KtWoNnDXADhpnn6CPyF3ddGm1StzxadjV2H4J23cRCyDiEhJG3gcMz6fwF",
  "key7": "nNYPT1uJqaA9Hev1mFfrc2psdBFx8ob889Jx91wnuubgFfrWBhLLgNcp1uU5CqsTB3var8WHUy1U6UgbXdE6P7x",
  "key8": "2FA7j31i6rJgGmziZ78bdjpGkB74ee3LwSt96U24Co7EVJYUnv7upJi1UNKRphvgw5c1RQd6ZVaaN2Tg8rFxaRLG",
  "key9": "5jpAXRNN871AqHipw7TdmXepb7b57Meckm12khT32quxu5uwJxYattCE1aQErMZvBhA9fNN94Lpp5okXqjtuGqs7",
  "key10": "4B3kYffuHfXPrgWq8jhRJ1r3VPs6c4LztMC2rA4xJB2UHvXsqmaQGTgZchzprwcB5DMbLoM9peDHFRZGdMp81wre",
  "key11": "KKpAGLQd73jgUgErJp1ecEG3AHtiqGCeZnRnmRvEi6R8DhY9tq77Uo1xCfQnu5hdSbmWgSdG61FKrpxQA8YHsVr",
  "key12": "2Spe9W12PtfEooc4YPHDwr8gpRURbHJd4KgbDASyzNvppWpBKX7W9h9rN9YaSCDceJRVxsc3mgee7bzaBi9MueC3",
  "key13": "oM59gNuL8u6hNi88Srp6qDoFAzvSvqk8yy29MvVAhEMGmysuAmwBioZX9xRUwxgQMMHP7vSvxuZQYuMQdA3We5S",
  "key14": "2CstHXNXshvu6XQeq2WJD1FrnkwJPuNvyan3AwcNS3EHugava5dQLuZuhiMKdLWfoPRs4jewBiEo87kQavdC6YAH",
  "key15": "4r8Y1LabUHc2jw7rep8HTkQMUNGP53Woy3rKmw9tjYFdR1zha578jFrpSqdVKQY3zqNgeDU3ycmJ81NQerXidc8M",
  "key16": "673iELxvtVSmwsoz5gBX5PXGiuZDTqazaCStQxPZMHfmQb1VK2oRRgCMsYY1mcAnZoKfZtj1PGL1T8V226MQMB9p",
  "key17": "XwmYtwQqh9VTU2uJNuKsaMK21bNdkcAZ4vpZ4HZ4wy9JYh4CgivopKajEAnc1vko8Cg6s9X4HA7uE6vsQzan5ig",
  "key18": "2E3GDthGWdebKZ9cgU1vuxAW15stp9R75EfTP8EJ7Jo2pbc3WSr3SusMXNehYtC2QgQeR9XRH77duhBowtDHLzdK",
  "key19": "4caj4r92zthn1bQLBovEPYG76q39Jc2k28e7we9GpggsZWoHkvRFAwgpYE43PotdQbBqrHHcCbBoQQVJATacGtFo",
  "key20": "2Se9BG5H1tpxBgW8rjYFFpxYez9uSCRCMfQH2N3439B7NEMZfgSECHWyBGDnVe8jzEjtDHTX2BMYC5Cqxg57Vm1z",
  "key21": "5uYiwMXqUQuYBHQeXMi43r5jyKh8QPxgFy7VoEYEh72Gt5j2wUrQBtuvrnbVMZM23tJ13uvQ6UQGJmZ3C2M3tVCe",
  "key22": "3gEUqxhqCeGmzHrKkdhXccggxT87gBVPfWyUC3BTJ7DwoeEYK6NXtHoaQKosYZR5WpHSgDvVqv4SweGcySatcfhc",
  "key23": "5AM76BejHiKeTtMzoweVJP2S2qvdGn4nGGsGy1x4NQ7pXx1Sc1waKWxGG12t8KekSjQGbQsv49urWgK4E7YEjP54",
  "key24": "5ePZoUEeHTRgP5Xa34t4PtsXB9L3V8VCEMRyJg4uZQW7wEvnhafJ86eRnSEfVf6T8A3eZBdvzytG6ZdpR73QMrgQ",
  "key25": "3YoxFpeVraBudcu2KRKey6F4XuvKEUujtSV9oqyC1BSgryjtaVPpoVjH9yWptsPYk3J8qBkoPGJCeJvAQ4doazNo",
  "key26": "3adkSB39dwZe4RxAD7g3QCuyjBtV31WFKp4VHrXewPKiHv3cQkTVRZr1dbLZcFE1QEusoTqA4yGq5Vuv19wjQQLE",
  "key27": "57xnKiHjrjM5caFK1iCNzrB1j87nuUgwbzjQUCkCwTCzdr5YC5Zsj7EkM6gtHTUspm8zpXm5nVDn1XfKeWh4rzAT",
  "key28": "2vVay6acvZh2xFbj6Ak3khrZpG1vuL5WLdn7pNvHfEWBKqudwPAJXkbv5AVrzqZdmw2JHENu7wND3Ab5uPu3ijph",
  "key29": "5GWTreMK1QEuTHQrrVKi7wJnGnicASLK4HoyewuioBbF5YGkACHP8hDivwoysv7gvFxgboNrwEuRR1iRMCaGXLwv",
  "key30": "5h8mYcNMHkDBjWj8JAz7fRjYTBnz7RZUSNYV9SXsGDxKhSfAXMxrJmV1MTka5SvAQZ9YmE8Bd6enojYgpVGtPmq",
  "key31": "5cdqT8SqzPSuntgDexAD3vSWuGuJvqpacsUi6SZyCK7JBqsQdniJCvWgjkWGvCCva65mbosWMUnsGfnu8efjnpwm",
  "key32": "2ius8fbrEAFcUfvvkwgKNPyqdSN4Fn5UwRsr78XyVRydMGPvkkEoNKmYyx7wduSASSnBkajicw2B11WFp7rQfwqL",
  "key33": "4EBjpoRDyhoFZfNSRfT8QGixpfK5F4dL4KDWN6wA3BG3P6Csa4HHaTwpkqhPUcmGoM8oX4AkDzSPSDTBC6wtGUCW",
  "key34": "5Pgjj3YRuakKQmZMdsSRshgBUtofJg51zz1hY6eAJmc3f9MDVMs6b3g7ztEZr5Zyf4BRQyr5tstxrhvkcathC5Tw",
  "key35": "LZjHwVPbhHE75jKfgisJzitEhUPmj5cGQKDNy1PCxF3wmr7fCfK45WKFoWNb2Kt6bTukZXVdYnvEd2LrZLYer1o",
  "key36": "4VcHBDL4Ak8qxC39w71cNicxBs38ub1MJrzWQHGnBxcmD14WovLNqHUs7niBuu4h8eAG8294xrWpupmheQJwLFoN",
  "key37": "ZHPETpx3Y3jjMKumpDWZ8eCcF6oYw4Kdotexk9LFTuQgwMRpabQkS9jtKbfsRndTSzSoTfBYbKCSJL86xCog6YP",
  "key38": "5uxCYfhur4towY8Kvp3hQFQsCYtapigJdmukcUt8GtThzymSUjVDffUNx32DY5PDq2nmWdcECVhnn1zEHQmAVqCF",
  "key39": "5ZgH8UB9SjPcDU4QMTBY1BgdXAnkUeN8bNKURQfCikTBPBfDb4pvA3SENFm5aF65U9cTaAHmfvcfdC3Q9nfjAH4z",
  "key40": "5Ht7mytKzKw6Ck3FTe1Gm6iy6owhiwta6Xd5bvALWPdAyNdf459KHwZyzNyr4rzTsbdp71jDb6q6C4okCqXZPXoN",
  "key41": "4E42UW5HhYQbPdXFNMPUZytXJ6kSfTKJp73nuk8onhdxBj8sEZUwbzF4PUhcxytwQ8kpZPhXALPZxdiykvKEDK5U",
  "key42": "3HACcqxDihqeNgVQem7cG9aAr8p2RNBBtfT3u7FMaBuDTauDU4LRYyDhR7vqXfZt5fEBrnaEEmXejJYcpUTjvQGh",
  "key43": "3HpAQzhKkVypEvYg2NVE1ffxYC1199c2dJbwkhqCvADUPNkos7ZogrH72PAKJtS7P9furkbyw246uAYPRmuRB2L"
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
