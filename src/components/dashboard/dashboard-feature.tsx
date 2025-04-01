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
    "7vQqckhKDabQTMKUpCyt6cBgdRhRftwEj3EPNFUygx3To8RUvCXvi1PC6ag4Ys2URNHKxG8S4pM1VCnruHPNviF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iycFecPMzLzstmBNmNqV9xyBJrfaBYpTqyw1WzZ1RPUrGG7hJm7pi5bH23iBea7TGHeXbb47o5tHbVommcfzDKD",
  "key1": "4QxUin36RoC4Sk4b5TsEdqeMEEZaDBUqnXGfWCRUJKrE45nH3b5fn6sGxkmS77R27hWt621rcQYf9EvukxRkpVWv",
  "key2": "3uXCuVDwVBKBbN8u2CdvR8SYqk847SSJkH6JbFBbrN3sBP7LFvQUMDn75hz9ihsfuTutPz7SzdruS7TAp3zTnKrD",
  "key3": "22KX7daVjyYhQcBNSXKN8KWWyPLDGmJ5Bh8CiBzqQgYx9hWdRVupEfek9sEGJqnvw1M9wQYZJpFeXAVVsLxcucs9",
  "key4": "1tZYeBLjsNa3Skp8zse7dvGT2ctqJiaXGtv4MJU7U4y3diUSz6oWhMoCLpRA9JKy9GmdyGvCdS9sMauyYC2t7SF",
  "key5": "3uq9QfgcgPNKAXAoPWRuzhLjJBkPSQDXbNY8HeWrmM78y9TDLUNaxth95c58EVG1myFJjhFctVbQAuppEgUJVyoC",
  "key6": "gpRYTAE316pkohnQwZzca94nHGxVb8Yut8Tz33MoYwiQW3arCF8NHkDbTNdpFZ6dHfRJHUiHUzbwriL7FaRGrKu",
  "key7": "dwj5tisaSrL6FiY2sxzYXuv9tA5d7us18drHEKwr9EADN12PNw7ASuHaPwZhHFtopBzwZgWGybuqV8vfk7VpD26",
  "key8": "1221teXxmVa4RXBg4HQWhshjigGVhwXUkcxbARZqhpkXUvUBVqJcDCoXqcKdrieaPHLMSW5Wb21dCnSyQ9B6mmXS",
  "key9": "CNmDfPybBZ4b8yvPWNMGHUanxojwMoWRnDTH3e2wNSBEteHdYqkwEzPV7rc2X7Wxs5mzRmW3jcks1ofiFdzX7zM",
  "key10": "2D8iChPfoDTjDyqJXGHt7dkBMJJkhDTmnNup8VHWCYU4ekDqLG1QYtmQo1fHkWsin65LGkK3ehE2uHZHPtyyYEsd",
  "key11": "3zQZaHPJw1UevCxL932kTLupHnVrUKsUownW46dkMpRLooyDUR93e3LoaNM1C1F2GQtf3kywevycc3quQspUVLS4",
  "key12": "WTkg4YZmkyTjmYyNVt8fXN1RGKcokhFYRcj6F46AT53hpKeEnReuwVcQRoAxtyyE4UFWqyCb59ERJPstNoYTpzU",
  "key13": "3z8JxwTnXkLRGjGg2nLNU7HvDGghR1pqmuvzUXaYfUL8kVFeke8c8HUgmh35Z4nnixLjdushLoCdWDAdmWykMLYb",
  "key14": "zzPnRRvNEgzLxKxdVbCrbxL9KyJUagFZ3PjpTngLAidfdVSMyP9Httg1gMyf7LApJEBThSdNfnjbuiLKhVXGbUu",
  "key15": "5jT6xDjBwZg5aB2FEMjJx8CUDN6Ykn1vGY9uB2iUJat3eUJiAdBfJ5a3tqnbsMzivqs5job2YBvd4dpyAfwUByHf",
  "key16": "5pDmBXMUWPGrZwi41sE65F8vt3opht8thm5aGdFTjs6CmkpVehHP8WFeneMzRs7diserUyCST1TGPpznwyWWUwSK",
  "key17": "2xBDWH1J4ocTAgRH2G9ViYbrQ4eFbmwvmdv82vv8jfGvkmriYSWGpU1PhyXqZ6g6jZDN8UH1nR7spDQy364CWJRX",
  "key18": "N64j6NLoEGiBfe5Lf5AXYrthLe2RT1SPyBv39csjF2hTWgukSc3esPrYMpGogEP4YJJMikdgCFm5TzEfuYcx2QH",
  "key19": "2ViC4sa8hig5P4PS4QSde2VM8guWsay1euVCME2eHz4W2431gpqeZe54vaHKXK3L2i6ECPDHACzREg6sSgykPSXH",
  "key20": "2XMShQTbS9xe1vF4hbtaurboMGdpHyX25SeBQx1Wxaea8m4FDCEYoxerhtKeDrYGdiUEziWYDqB1ixggrufamoHr",
  "key21": "2XdP5zT8qYmQJfCvJSDg8FjHJeFrUipvpd8grPEmZJM2F7ZjCVDeu2htaJsYE8a6vrcsWk1iWSRr8VKCSg6TkrSF",
  "key22": "4mtehJ6URghZMe9Kdqw49TdSnuAw7E2NZTjhEdGBNYRarq4MFZqjPiFNeH7H1wue7VDdFbXp49HJwGDm9ScGDftT",
  "key23": "4raiaKCHVZje8UbdEwapCARKsyZYrCBpuZXAWg1Yj61UHd4Ms9mWt35mBzo55QGQTqgMBP5zuCUSyRSQXJiS8HDd",
  "key24": "XdJM3yA8gsj2F7WaiPNdXLHtFEJTV7mBBdPYaurL1xN9MQNNCAmEjQEfHx4Qbru6ojpCgAF1bDvbaemfyA1SgqE",
  "key25": "3ixkLsGJFm35PwjSkRqjNPgqv1ERtK2rUoVreqqTg6HxrsNoJNYwSdC68Qda9VMTjEm4Hhkk4RqVpUQMgC1gQtFC",
  "key26": "2qnzNYyyXaDZkvENZmCpYYYeaMz8vzVGp4BLt6FrDAErZHCL3ryM9d9KfCYJfW3AwXogtKUgWj73mz7rA36BfV4L",
  "key27": "4x8dnCoyVqKHKLrvmkE6NcLKCkPSeigRYFKJ3mYaLNTKKvPzC4sp424VLZ6K95pf8ggPHjdXxqsSSVPd3upz3aFF",
  "key28": "pUS6FGumZsRMwaNS1PjksHfypL89FrHdXAczwp3VWHosDbinixpg3XvT2HnggcQ4h9E4BUoY6SE8pKYf6UmZHtM",
  "key29": "49PwCyfjEB8XgDbHZoW3NVThxzbVQjuBmWK6sP18FsahDg5vFRViWfroBtsa9BhhvsaBbUyGmKDPWxjQa1NXiCm3",
  "key30": "3XKqNeBtESoxANonmU4zytjDxALEiiypRaBW3RuqrMEFcBTVus8AVzsdd32rgGdP17tcLFSAmaUJUWRWW2YQ5CF3",
  "key31": "2ePdAcLkx3NRsG52KtvFVbjt1Ys28WKRgzUfk1QUsCLgfw8KXadwMCFBH96dhbdmXQjBcJkkZUewVuk1dmQ7SeZz",
  "key32": "5mKWKjwJgtgWicAEhRdGc6ni9N64neXqugP6rU16FR9hkW4wieoVTPV5Ug4BjjVgjYpqGi8k2bByrsixkt4aiGZh",
  "key33": "4u86LoFGPyTKJghNjBAaS6h99Yv3YnuvMmRZk79MaiJ9CNvSVSQ4p3qCo7gWZDbbkjYxAWDpMgWJgguo9U82DKhd",
  "key34": "5N7KqNRN9hnUgyhh7nHbDNiaR3dhVshs8WCNbDpKjEN3PkiWEfVCFTTings6v2KDpDDFYNhxXVc4unax5fVdAvG7",
  "key35": "2Nz8s9xhfRrqyEiLgXdPCcYk1Hx9eA2SdQV2Eib7Ea9nrxV2cmbGMfy3hK3TvNVTM9f2sUrD9YX7xWFhRDDUn4nb",
  "key36": "5D3MPErLpuVMg2o2HTfZM9m7JevKxFMsxvKNDLgQyYhwCcP7ZJ3roXfpkxSv3TJ1Ap4Tq4fMVXDamq3KTPdfBCto",
  "key37": "44XKakYBbsb5RLLNrwpJeVwx8S1X7r1rZQYonV9P5j2hGW9YueNmkQdZXbw9x7HTQTtHab6hxPDCxxhAwT2mWqiv",
  "key38": "5XSwhYjpxosULCeZF4FDbs5nh1hWmKnajSt9B7dVVnxP1acN78mXtXmv62px1QkJDcJ987GnYy9YSJcCsCxHTN4d"
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
