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
    "4vFUYikbxcmGWRYLV6LbVqTkxC6r9y4dwXnEvBiiLCjM5hoLQUbXn7JmAYdVFjwhfULZs1RP64PpQWxvCmLdD3gJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bY6NaV4Mdv91g59TnvCRCfqcpqYd741tKibtgHKLYmYz8GvufDcxjvPM5AfJ5rqACArEHvhpDJxJCuc66osQSVx",
  "key1": "cJpzJgqZknKS15HD8CukqqEf1WH4r8yJBmBfn8zCiTxidc7uZDMkJgKsKQE72RT5DND2WCiboTQauxnZVR75wgi",
  "key2": "QWVQPfXPyVifhd4k9mxt6wJWqDr1HH2BnfNGjE2JYApjvzJmVsjMg57RJM9yfiDuqzKJSA3iwVQxoVSBtCLgkCN",
  "key3": "32idEyALj4qQqshceuqupCoQTNC7ABX5xy18qvgVK4VfBAuQ6JXEdDfLQw95K6q2sWXco1UAdk21n449PYJG2hzk",
  "key4": "5CqsL3mMGxJKXpQTdzbsvevxNcnnrsQEWpYA7nQYu39f6eVM2WgZweevTFioDKSQ6t9qCYempGQqqKXGXZBFDnk3",
  "key5": "4b9yemtpdwfzJjeP3QW5xvYvwnvSiMskkU5VCfaJNGK2fGhQGmwJxQLg1J82Qz8Mpdhn2GSaB9BJmSUvr8r3KSAP",
  "key6": "37JhfrJM57cPBmqqNgf178zV3NZeEeTdCPy8kf4L72jCJms1fMXJRGQM95dUjmPhEE5935idDHbXTmmhfg5LymNu",
  "key7": "21KyEfnLtjvrKdJCm9RU8prks4Af4C5N24Upw9Tczc3HDNYZiy66thTYBXcGd9bSJBjrMm6xpLTXjoceU8xBubjj",
  "key8": "tZDWkRziSCiuEK7x5QsKgZpwAmdggbcyjrM4gn8pF9VkyiU5t5VQALnDDNkrZS3LcDE6bgt9c4wKgNwCEVERYbE",
  "key9": "2vZJXdj1LtiWV5pnieLAcbnFX8PJJ3K9NzeT6A9G9n3BoeaXUebC2eDPH7AH5wMqho3ABQ8Lfqq9HDCxyZTuSN88",
  "key10": "awMcH9r9Zew2EoaKTTFYFWVs9yGdVjzkZappLpYvE8pNPfDdeJHa1urTc4f8adCuzcuWQsy18ANBZxKv5imcYu3",
  "key11": "2RNTvSCm9bJTSh1oWLdhFZt2gBb8PtMCTbN2hGkLCTijfcnbbjPSLahmVfrRvdVqnksgmxoQazvnJVcFBU29ZH9A",
  "key12": "dNT7isdVufAdZwS2fzh9ucGUauyKovRubX6K7BXvVQGAkdQDnGRuHps4SaYjrV4kQr7NMtvDhi37BWSGAjth7gh",
  "key13": "Sfjyr3VfYt8QJWyke6zyPpaBxEvm5yYhDH5LsWpvUjfFicPTEKb7VoupywcW5mEPbWN54YTD4HfVdozNJK77Yun",
  "key14": "WdEU793o9zUFgu25Dn9NHUive11oLh7uTdxXYLoJFRjGW5UzVeCHyWMqLi5dtL1AynBcD7Ws9JbtzzosH9znVKU",
  "key15": "4xppqrTr65j7PMwtJ7C9QLdat7yeG58pNDiB4a12mirxxZapp5Zp3QJNQSXXULa8bSgKD6VuZcSPkn7JjeZR6cU9",
  "key16": "3faCqMKi1gMcokPCjHaPies9KWZSgjWQcGh7wPVWqorBiST7rxjWTeYYc3UXBQJCheUHo3jtAcresXxZKUZdAhr3",
  "key17": "3giJDBojTHEgD2CL5fdGPr1djiN2GCcaxjuNU1V3v7USWpSMYv3GsVhmPq5vvCAyztitJHFbNNqtvjGj1wGuSWSv",
  "key18": "57NCJyXrsWm9T9uSgUwT2CPCSLcjNpG21LSvoreKHQfVX8xiafUBpTG3h535nA3EsDu6rozuWH41mdD6RSHTg4EH",
  "key19": "3VxYUVTJTiPVKtw1p3htuhYS9bK8Wv7nUhHRxDTcNcnkL3LaWaPbMdYEL1JPGkygnUDyA446CkfDnj8VF1oSRPLo",
  "key20": "4u868JSeM3ci7fnGcmaY6vrvy4wGPEFipwqXci91CbmsGTxVyi2e6yHSseucsCgh6q3LWQevmgs5TP6jEWL8pTEP",
  "key21": "3N7MpyfTrfm8URCN2mAiuSF5VTnS3P7m8aovGyKyHmKYuRh1EbUTgFrE8nNVdKH3AKjXt4dSf93pFixKRLvSGfJr",
  "key22": "2pP3zvpyZXFf7CNa9wuMU3SxmAYmmaaAUK7fXu4AKJWg3ny6y1NVsx3tk63qxySa5KaZW7LdTNsfGLs47qzXCFa6",
  "key23": "2qcwMiAV3vt4sM5eau6qLuqqCRQfMD4TNcdY9DmSHsVk2kfgBrVHF9gniCbE56GAyFpyMfEBECBSKDDnnRHskj8t",
  "key24": "62DbNf3yKZ6ypudDJTTtsumvmDAuuqbHKtYuzWGLkw9HS2EyBeUSeQK48h2wbkfP4b8EpNjfVU7Q3s1imCBjJwUA",
  "key25": "65qt7ySedc8j8dyc612q4hnUu2xSWi7Hr8jaiRX9J6yD8CvHi2AH2bSngZ9q2eHUXkQCTThbid9TAiiiLbDb4iyr",
  "key26": "3CUZQNxEqPmaWe7gdzUziqfefsUHA2NifXkFEGHXFjWi1Aeo8eCLKWJh8Epe56JhNYYvLmgR5Ds6iAKFw37pNLmg",
  "key27": "616iD16fqWsxKviisRfpoafN56iY3qUR8pTfRXC3B7G2XbpXa6TpxFaxk6EPTrn49fR3kPYK2Butw2ncvu5XFs6M",
  "key28": "2gPhAdRPjbzgaXseApSrf5oYpMHDVyCViUJbSn5Dw8HAyu3pt7q4YJCMD6wHVuTkJrkQi3XrjYhNmSfwsnmSfz1X",
  "key29": "5BNvparkYk5rd49hFMsy9zFz1spSJCodXDSRHAce3yiZn9JZ5TeSPY4ax8kyxmgYjFpNzQ216TQFCSSf3XKwMPxc",
  "key30": "FXFzPXjD7EbZiyJ7jLVd9CuPJmfBtppPDPfFjHxPKdgSTwHJZ96hCZcUWbeCH4uzd3vVq4JLyLinzRUurNhGeRM",
  "key31": "2MR81Yx5cDgRoSGLj5CV7RZrifXKprBYbMHXKNLaj5p1uTqLPeCofZ2VyvVjwWXfuyrtjPPaXCvikTUcyTWv6dpB",
  "key32": "33kDj57DQ2bVDTBB8dmTtY1NBBybDebKQXNqXSgbT4cPKW2EGsDzGyUET54Dpyyq5E551juTQazkPeotED1p4CtF",
  "key33": "5uYK7o3ztLPD6HKJrZ3iwovVVvXSfcQWdvV3RAMHwGdixzfvpxsHfScgY6E9MxB946UbVZrfQhP8LTZNUNBZUF6U",
  "key34": "3vDCfCQ19LY4jGoKs9ASKRDHGySHdmRT9AHCGzCo9J7e85APGKHTmWPRpjajnsR5HLbgVg6ZnFSz7EvPisYK1QXS",
  "key35": "34EayX1Srhf9jdpdC31MjoJXm7mJkDhmooNv6RvPcR5FgNwFqWUcH6FjP37HXGYhsyf2MRtR2m7FyJR2k6eTadaQ",
  "key36": "541zaty8W3HiSnZcYuW5KDsTNEN3JgaiXpxmAp7AfDqmdWoUmZUi4dxjAxbLQPEULhMRNhGpft9gZj5W4kQEANTd",
  "key37": "44Q4cvA4M5CTjv2eqLDu7gp4WYQidTP6N79RFNMErBnqdJkqH66WqcDDk8kkiubr8hzKUox29VNDw7jsKX5EGsva",
  "key38": "5RqW6xPDqM3dasDWDYjy2FM7dPpygx6uTHT3ykrpoXrR7jesFJcwGVsCeRL3tVMFEUFSkdA3nYb54hWcGwCm5sG8",
  "key39": "qexdeyG4rhDj9YnJEJhckmvhhMgWxQnpKFVLF8EvapSnsoS8eK1fJbzfnUngcoBELCe4YrmQzYhPFp5trY3FfJS",
  "key40": "2Evi1xctqLPHiAsSK3uCEhYa8Hndy9WJKUFenLUvqfDb1nzut4x2MKkJXRBeHEHdog1SiRGi2jM6FcU1Nr5yBkdg",
  "key41": "3XBdRdUkLLcLDXgDLZNEr59z4pzmYN1XdoRvyAqK8VNAsBJHmzCqBmMApsjfEjx3yWJmDUoy7V7V5Pt3JfJDcpBh",
  "key42": "DSmYqwkUe3vHh4c4pmz7ixVSgHyZx3aBS3rMzDQ5UVRGZv3UypyJTD57cP8vVZ8Cn32YJoZwuv18CvDt4jhokki",
  "key43": "3bR8DK2CbBzASDAccyzMztgNGrfvNHZc2DHuKVZcFnn15dMAqj2UyDiaKGj8QYqtMk9PF1Qq33YVL6wCWuWgEo1z",
  "key44": "2cif26ps56dy3S71Nt39YSvfMPZuwCyPpqncCZE6GES2Szn2NXWMFqKi1bsbNwqyttdQuWzvFzvn6FBWP9YzgrPM",
  "key45": "5zv7RBgbkGe6zbbuWnZQGuNVJHSnHCeue1wgwWRC5vfbG2ERhSsQfjLLPMj1FL8bPNsdmRN99cz7e9cnAerxRe2i",
  "key46": "3WExgfLTXTyp8KA9WLkMWuKP5QE12nu67qrCL1Csb3AatConkmYGcDxQWd7ZjXfDn7HtpFbUwYXbZaxr4dYSVE2A",
  "key47": "5yJE5E94CPbFBiYP61xJ7UGWtrdyWqjwjtYVRbi25SwU3U9Y8Mi2FF7aiLqdDLMi2S1Uzc4wYQTUEc9Q8Z3rWcxt"
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
