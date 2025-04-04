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
    "5znPh3ga4tJm1JuebvBhtJCqP2L3SBqXCx7Wsmm8AfWn8ddZrkwnM1LJPzLqcJtfX7AooNQLtWwZjKyR5MEZt8Fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nM6K8hX8oMjMksejmP3eJd5gTBstY5MaoGsiHU3NWZdzy5qjk4SWni3mxxbqnEds3tt3vCcsJs225uQPUJvML5H",
  "key1": "56UfEPwoo1zoBqV7wkJ4yReBm6AZik6zG6tGkAnTdMoxPsL7zqLcsE9zYQDbbxxikeQjBLvH1ax1W32dVhE7bVGy",
  "key2": "41nHQ2RhpphdEWma8uBhjrFHyrwkv3knEfic4uQ2miuE86bP8a7RbTyewGDtkx42j2AvVNiKGxnRM4yaXmLrr1WR",
  "key3": "2f2z54rFyd2694MCJheEGazFZiZ5ssUFvYm4nH9FTvWUst3dikDcpQuxyYpvuFmrV5ajwk6fhuCnRfhYjyFGfWNj",
  "key4": "2xzU2CWJYcAhdSu93JqJZeaoKHoCURZ8zNyAG7bmPCL3XUqCRzysqaB4fYH4e8e7BGLbuWvvNipybzwV5kaGbw2K",
  "key5": "buP42fkb13jwroLs87Cy13wpi5DNcFWwECNmaYmUgVYC39JKw7pFTeazE2aEgn9XRvEGa2xuwwF3UzwpBXmzwMi",
  "key6": "52ryyqbwgWte1VWQKJ8Lc5BdgthRU3UR53LRAgtpHfPaGapn3qVy4gc8N5SvmuQqsfmAAakTeBESuEFq2Xky5eVA",
  "key7": "mkhjCqon3NA9PW1rhmjodsAqUXxXQgSDXbhubRSDKoa4U8tNT1JvCAW3NeXrfzhgnnPcbHfqLKLQWMJepNk2d1a",
  "key8": "SLKa1NmNAkB2HtnUpfzZqKBn5LCpzq3TbPoUnSH93EHyAuEzsFocKMwSZSu41PBh68pKfnTtSCQaHeiXUZbqR85",
  "key9": "23FvAt9ArdbGuXgQJoXCESnmBuNpFdC2A1HS9UueVQvdyuWcTiVTa3qtPz1tDiFZ1LzmfGWP8MZXyQXXGpx3mj3W",
  "key10": "2cv4H2M87gM1TLKHE8pzF2EMUJ7m6AwyRswyGhGwcaChvpd2S488BQvuZqfaEuREiBU7rh2mJjhT1jddfeFgvmAd",
  "key11": "29f8UUZdBQ8STaBuVGgHpAEy62gJTKUdvrgXNCeFG2ePHDUf9jy47YgKJ7rTXdfBZYs6m9XywoPBm4EHfY9gTjo7",
  "key12": "23PtJizSLrEn5mCtZBLrVfYG67qTdhmX4b6zmkHEQrJSX6ErfnUVsFuCkrGikhBiTvtJG7MKzSEJb7CSkzhsyrGZ",
  "key13": "3rtpoqvv1ZYqCWGqb8Vb3BAgmFRTvpijKwbVWzmpbvnbsVqGGwju14Qknek6UoP18CHvRR3t4yWSjRynkvs2hKt3",
  "key14": "4H9ZGfgfmC1itoQVnx5ogAsCy2LQNZccj8yZsdEcGFy1GkZFxJarA6EdA2vc1YB492wkQ56JQdatT1uPunwridrm",
  "key15": "wKPnCyC3rZbHrPSELaarv2djiYmX9aYKKgwtBBGeL4JgE8w5g9yBs4fvPmQxVKJBWSA1X9YmrefZqrfnEBi9Z4D",
  "key16": "2KyWKj7wYcFjaopbQRi55Fi4pFXpSvfr13XgYaBo2ZNeve3tSjYbqPP5mSJyigdHb2S2BHPaghGe6GqNjG5HK8WB",
  "key17": "iKkRDKwGdpVkDPpmjcHrwodtUrMvnae9HcmiZFMcpMcbVrUv1PVNgiht5Jron97XQfXAHv9U2Qvj3vaHaeAg53P",
  "key18": "3SLHoEBn6aQtmHPmD76fwTFehXn5isYMGqHaEBaExwSBQSA3Q1KMZegXARxRoa8ZuYqwhVsUDHNa6Lw2mrdUomqu",
  "key19": "3b97U6a3owS3cWKRjLE38fYmE4dgjJEUfwxPYLLuDUgZAurPyA59RdpUNEFF396CKRYTyrm4umJm6g77zKgkGSYh",
  "key20": "ka2V9QEaX6yx35EZ8ruVPk2Japib2sZriGjSMApUkKqeBH8KvuhHqz8eysmZnJB5BkiK5NVA372xvwY8EmVvjC3",
  "key21": "3xxyTgN8JirQik29AihzhAwyER5jkw5J9EZHeCUJTHGtX7vQhkQrLRMaFzPDMvumKLF4SNLYbDrpNCPuMBbziFpg",
  "key22": "GWdqJZxyghoD7bggujqMBu9T3qR8NMcBofoGDHDVhBGxXBsPfocixKPG47m8K4dmHq3dt5JpFSMuNc3XrXmdYe2",
  "key23": "4qc3XwXew88gpwJ9Ya5koTJ63qScnFB2AgmDsiT6hoX1M1LQG9UsCDEmoegm3XpWrj5WU4in263TaUfDCx1DRBuA",
  "key24": "4desXMK6fwYbogN7JEGwhjMCVf3s6ND4ty2v8Q8jAvxFbeFwQEhcwjvxcJ9hBwFWDskkCHFxtXHFPTRhaHduvWze",
  "key25": "2ywJcCzUDWP52i4bHYxAr62gbiMFosCGVqHQmoNotwPtfa7x7aw3mJqMNR1HoRduzpLGu7o9gt9ACmPkWRbAf2TD",
  "key26": "3Gu8ubBnqwWX8HMSeA6KiG6ZkfK8MjdEjK5Cg4TzxpmPTEx8jgpvF3jccsGhUkPfjnQrJ7oF9jKZ7AqLYpkUHQLZ",
  "key27": "5fYKoBLX1HLRPYDfaAHJ1vgW3A7ThCkpYsDzFqSQHLRMbS5tewEwnsMPAqdUba4fMpJLLK5LxRpAaByggFF3rcqx"
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
