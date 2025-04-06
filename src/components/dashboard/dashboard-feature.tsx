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
    "2gouBFk7nooScYXCQ6hnZ4P1VX1b4dH1Gibdmd5Pnt8XjitDgAHDw75zoVpnWvJrvQcWoHPT4LXzr3AYxK3xXkUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RWVtoNfp3GVM2wScECV3kQ6ewfscqCFUx8HGEr5HDJPhsBJei18qA2S6y92v5iH9gfFiM2zHcHRio249isg65uA",
  "key1": "5YqkVj8FKKA6J6p1MPt4bLh1dm46PFkaJYH3G9xQVTDevgq938L9JECGHE5DAhw1wxSJMabTCtoTLooYKpnaKVku",
  "key2": "of66wsyRV8ZVX3nh5Wq95cKqEUjGg8BHpEAnPGid8B6crYYQykPvDUb3aTacMJmNwa95ZZaYLy32fXLWwFWnHHr",
  "key3": "4FzG9R2wWW9TmG3hoqZsGkB8PAYkbbZcUUoiKuk9F7Dt3oMNVPPdvte2B3pdiquHCFTLqBE3mtdQgGvVxQcRHfEk",
  "key4": "2S24MXJ4Q8Awgq1tdQjSrUkgnzzpRsomZGiU4sTJmzcjEi3o3MwYTzxsgf24crb6kPZusmndcHFV9vA6VMtiWXMF",
  "key5": "3vZ88LhbgmWcLBucJHvdr4zhjpZpdxmvKiwcMMFV6qqfznfQrQHscvvX2xjxFmxiLgqkc37xJb62KqppZGZS1cKF",
  "key6": "4pwisBA65NYM2bjWdebmnELuouQjz4fLCPXdWknoo2HcberAD6xYbRHYZFq1ghy4AZrDnBXtjfqxPKrQ7VvKa6Gi",
  "key7": "TxN5YXoCtgNz57C3LgEaS63vEp6soKfioiNDC7aN1kgtaKxtzFXmaPYjLhvL3V2DDoFEgYzRTGE9q3PgoYFnzsZ",
  "key8": "2BgJJ2YBT5u7pULWv3EVJV5k7AmaWYX38LLYPRrgFZeWigCZeMbGdTJgXgvyXwXkfX2a19BhPsC1o5SKFqUNZA4g",
  "key9": "5ioQfUBo3HeUYPSbr9REKHzMXoPQkiJ2i2b1xVx2CtyYGnsXcrW5xt91pHQWvhQuveZPUnDckxGaADXiWcCDy67A",
  "key10": "4pFeSnV1QfaafZKBbGYCjPFrxZDxjUrq7a6KGemCgHKVPbfHjM9Q7xU3JpURhV6jzYbXXcLVPM8fusmeFpjiab3y",
  "key11": "2MG8jNVMNCuSK26abh2mjztMKtEWxGXwxyZSVwmNwi6UZbTkWCAEQt8Ecomsde9rPVeNY9n3Hqii6f8mTVP1YAAg",
  "key12": "Dnv46ryGjnTwfjQqwwVHZZU2FMU7Qrw1TjusjG9gqHxdXmKMMMQ567CYGViN5Mf6aDxLVWMXD4b6X3prRkD7NXf",
  "key13": "iVJ3yAAj7T1zgTJhPmEVzuqUDqFNQa6k17s4CtvEQnUThXxm8o7sfVpxYSctvqLPFPHYXHnVgDa7Havfr5FkaiV",
  "key14": "5rUzPiiY5KKdModkUrgFcvuhttyobu6UX6v9bU2fJUq2cJTApfkURFAxtiQFZZzS8DnhhE69wtWfaPFCQ7hQQ6nD",
  "key15": "5zhs35bxeejyvYA4Ww156yGAPGvd7mWV7xSmB5aH9BxyiRhX6PRAWisZTUwKUpkSztfdevvRvQhwJGCKVMNMm5ky",
  "key16": "4zmh3VjtNdFXArSwMAWaGv13UHrmHSpFmxkMVF37SV8rsAs74x82xpEv1AA1D21r55UkGGnBVs4S4JuDjJPoum6Y",
  "key17": "5Pw1aE4vdmTdPgbS9kAFs3jpz5ENLtMoeikqRY5YjbxJ5SfBQe6LxYRea4XVJCN4yQUGcLyRyGcsYisSPrH2nrcz",
  "key18": "5ze1E1n648VZwMjoM2iDELtMyAKspnaQZNiPy5Bo5G5XTmfwvZse2x7EjchaiKpmbZz59sSxFWXtsWBRwcF2UcMW",
  "key19": "2zQyAW4yiMKo2nrSCZfa8CNsDsjv4wRK4PFAYXLHgacNEuLh3fD7NGmzkGwjCTmRLgrLdWWdgZ4D8aJDJjZ4BkXj",
  "key20": "UK8RtSRBWSD3zKsjaPvuDuvy2CVdpkgWACHzJ6TG9SoSkWrxVF346QfiHZrct47v2UyLKPpjiQfxPsLD2KS2eSV",
  "key21": "59s9CBCsahAibEJfasXyyiiYhN4gpGQ2CsDuo4QDs89eRu7MYL3Yyx6Q6WEZDD5Az4dCw1qvyhb8tCtdsiykRiqP",
  "key22": "4hhtWcybFHeCCedAggjWurvkKXu9kb2Ewmm8sidwMLoKnvXdWJYGijECJXpVmdorkdVb6nWTRyHQjHPkK4S4KsCa",
  "key23": "4rMAwYLeWBSKML86edbMuhAkAc8arVb2Pg8EWHL9yXARaJ3uLgn9MM43HmSU68e31GVzFfs3ny66mjsXJUEyrBqc",
  "key24": "3PVDTJzjgybjLLTswaLU6Awjf1NcVaTXT5ZybPxpRu6TKEQBvw6ZGwUg7BkCW4ZBDmmkpXmryhaLdv1yAnsSHbh",
  "key25": "2CoW82yFP3HEM5UGxwpwG7WBJrwLUrriBMtTaahKfKmrfKqexvsG1QkaJFQkryfqCamPcQZoNDm54w4SusbuMb44",
  "key26": "NpfaGpuMKcKi3SzsiSA5XUPZ7jy7ss2tGpXfLoAGfTvYW1d3p7wkzXuebrUqea9W4ohoCHK6s63UYrjGw8AhWD1",
  "key27": "LXpfJUBschKEnRRSybZDToKB4p1Mzz7oweWX7mwwzYhqxpQuoyaRhQtEytMz98XWdrtZWphNQNrtvfPFwgcLTDr",
  "key28": "3n3ov8NJCR7oAj93Saz4bmUreTVuRhrsfqcSLTXeegGG7EuFPTSoxYYKMo2fAULDiRBywjKsBJ6fq7f9NktSPmqq",
  "key29": "UDX8MFJEgQGLXhiDgwuhJVvzjSQneTSaEc56NdT8CsW5rg8BueCjwiN5XP6Q8AhZwBooPK6Ps6n8SAGbnZhsNdW",
  "key30": "29mxSGPrSuFdAFPeCvevDR4eBVuivr3D8fW2BrFFTaWugEb5kvmad7m8G2uVHVgNTg3V6TwtH15HP7dE3cUQemfp",
  "key31": "7DHDMnaW1KUtmoPEowSKPUcmQuKWVHxAT2MwZfGDanHzNaHtsrEaSjZshi4asmxySo3ygWnwjLDDj66PJ4HX46r",
  "key32": "7Ae7hEgVtrJJMaZ8uFXKVcaT9anmcVKUafxvngMX6PoxJmndhrYoYkM5xaVcQQfmM8H73DykJoohGmymyhHTbZG",
  "key33": "4BgucADQfqJ68NpgEEuq6QqWQ4PwCT7sDda8rCjV3XdTxxhbhArSJMpxNibwzLT5RCCYcUvbaGFGmPds3Y7xM48U",
  "key34": "4KJd8uvfqq6bJ1JsbYbwEybGDGtQtTomnmNRN6Pb4ofvUjgXXtAuebS1a4koqtbyTpeSzFxmh6a47Zug7CLthRAP",
  "key35": "v5rSN8pQWYXwWz1RLHXaft4hYjG77rTRoekdwvyisudPBn1u4A8Gdm8r7AyRFDAyF48FKQHdxLRYrJnZRgjYu7e",
  "key36": "5J2wb6ovTzf6kD71QjAzSBhjjigCDQN1mbw8nBbxD1gSoWPZS52j915BhqMTyYa8VpmPURHvcx3wfhmcF6bMvdhs",
  "key37": "2a8Yi6x9BWqNwcpyb4GXRhw9Qsgbg1UwkrZyEGoHUmhiunzubGwC2s1woETCGpVdppuqbvWPUkDPp1KEfbyw5Kxf",
  "key38": "2pjstNFwApQ7PoswPpd2xvoveGse5k3jWHy9EFBmzxxPmKf6xdiGPxFw3gnBxPtmB6A3RYmP2CfdoJryceYncw8C",
  "key39": "nczdjbyWYNHzdgH9UhAiZsRSP33Bncs5DCTd3vCdztEee43KqvHuU55sH8ziqmG6f1ZEpP7224ruHMQh6adM157",
  "key40": "5Soo8ndqsjnKEDeWZuT3yPFDB3L6NDHBo9rxEegamHdaZbdt9ugT6H71dVGF5CtgtSmMsNm12y36NARsfY8gVKSe",
  "key41": "65MwWrsmaP2GzWu4dsJYQE8FcGWYAB4NzyYrXmpELDX7Gj5CiARR5S2YCPuxNMUJtN6BdGcE1T6rkSGdrRCVcoLv",
  "key42": "2d5cKM3EKV8XewoBcmb3UJvpjKcQuEe3HrTnrZJ9k9NKBRq87fKN9g9KMkQeSXp1cYg9spjsFK4Q5MSs2FuPYZWJ",
  "key43": "3GP9Wv2h9u5kx1fWwdGfMtohHfngG8PSc3wguxxGvnisKCeUykKEecaSsKj4Cz8SSUHjiCB2fupXHahR7UoFgMiT",
  "key44": "3XvJeEqzd3pmsLf68Bd6fCXqZX1zbKP91vtBr6wnSB8poEKdZyo18TX7BiizEi7VPUCDHoWq7GmA9QMUDt4cPwUr"
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
