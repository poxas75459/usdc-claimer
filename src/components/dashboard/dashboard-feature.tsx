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
    "wEB2ParnVDWeU3n8A7G2Q924S3NjihUHZkNyFXBVTLR3V6wGKjF8HCyPGA7oSGVL7ZAdwt9L4ipRctGB9qowiEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v5WCigzgB343NvjGK4zHLH8Nthp4w4SbugC51L1KkxDjpjYBxEvAfXhavY6djwGSCXHHpAESGPuCt3d588xT7oP",
  "key1": "C2jvmVyjbGmYGqdQ7SMCkEA1qoD9r81rizAsyVLiG1kJyT2HDLAt25UVGZTMyip47MUricUSXHJdvtSRpjjR4gA",
  "key2": "2UhZcWPLKTAtMs7pR4Hhohwv82rVM65g3hiTUM19if76ayGF6sRmZH9JoLCqhdoQBhwnjABrXim25BTbSCtFcVV1",
  "key3": "5LC8SX3iMADPcLRP8n9t1ots3EowKCJj8YQeebE6iopDXJCbe1PHHN9VGAkjTgJdj87UsXFGGDCwwBu516HbMBJA",
  "key4": "2YQJLMoYvHvgAFENZxTZq5Mmhn4gCXiX2phK6rMdLsSSz5zhaAidLgLibVp72E4XYzzkGnK8R4umzkE2jo1unKPt",
  "key5": "4DmMoBs2bgdu5JnnNKuPubWok2EyA1AY3xC7aVTGc3grwSUeVxJnPsT4NDsEgaBmMWDsjSVhn51oFykmMCq223CC",
  "key6": "3aqM7gJ1mSJt9uykeEsD3DD5EjXdoTT9ho2uaUYTZQhpLa92cPCvAbxifD8GRiKhd4AJ6dE9SDoHrM4MhkAHpkVM",
  "key7": "54Mkvo7Ewr6bEE4WG9hAa5qRL8Ldk7aVKSxtZgSQdWTLZ9Ahx3wMcR9aUsB5EqdH1bYJZDk8NVS5UpsgfVWKrC5U",
  "key8": "5GDbsgU91uvSLVH6tuRqMSphRnKPQEBiC3SpwrZd92JCbp4ChJ21oSaB5vXfAfUKZbx6iRjYfueRa8ztqcf6rKqu",
  "key9": "ybcf8Wwqx6d1cQNyXmoTgPMQ4Qm24ji8jZ2TEH3WjaLE8E541MJkxtjZeUeBTNZoRtjqGzWCahPCV2CCsfSdd2V",
  "key10": "5mgEG5KpZ1qhWEVozRdb96KPo92Nv7r3bzm1gXMBePEFRrHntdaaXKhVY4XpNotQGPH7qtZqUkLGyWsUq6sw1doz",
  "key11": "5kVfqbNKY4UzfnfgFBWqgA2m8Zq8FnCp4wqKpYMoyEZnxLDLfMgnNuTqxJ2nXUyid7jJrjV9ZrHL7qmAyUN6jPqv",
  "key12": "33ZE9FnUTm178CrZZ2ndpeUjFkx21krr3E5NUzTKAq9TpuQrzCDWiGP3YqkyNfQ22h7pqE9xn8LbBEkw8TWNiQcd",
  "key13": "72qGLa64v4V7ccAJuANzAYc27Q1eReq5b7vEyuZfvzzwqgHLqTz1M311iFtTJK1iE9eg2QpFd2F1cxtcwvqoLGg",
  "key14": "3hDaf63JCkLnRKgSTEw5qMzPbDAJx5Jv2tW8tje5Dz3vkoYpSEM3yjBN4VaYCmUHcGfX7njDZzSqboSD65GsmztA",
  "key15": "2s2j2PfVUqf9uHiW6aTprt5AEqRvT66VdwzMbtMeKwHkLrMUZ6jkEKzWS6FsNZaeRATbQ56dc4z91Bimzvb8TCUH",
  "key16": "5TFeuMD7EwCfb3Z9kdUmjZqksnCyC9aAHojrNk7fy8hGpiVb6in73b94MtzP8FeAEViphoCrbdBa6jRZoLZ8cC5z",
  "key17": "5nvwDwsYz9h31gjnnd9tnDJiZS1U79daVugUNchGH12vU3F5aX7fvNyGhkzveLKzYWLvdS4SfkEqCK1fHg8iQ5SB",
  "key18": "9mp9ihoGqyHPXHMC5gdWz8uF3Q1Xq7dA8dWWoLJcGWikxuhT9xHuo56k5zmJu76TKASUGSzHS1bvU2LxPmMCocK",
  "key19": "4X9ujCkxY2BL6VrJxExb8EZSxViHLarJtUVXDAhHVFTM63npQMTGK7PQCCMbCLhmhJbjjoekUqsYYfACkk5FW1Be",
  "key20": "3CZyuVEdsQmxA7VJmbqqBhMBGQkcRBJata6uP8wDX7oqGUUMeCaGLc9eXt2TG4uETvRscG8URzrJBtJiXrYCjj2M",
  "key21": "4gWmw16HmLcJZeQ2gkMG3cGxi29p8hKtHCBXgRd4RiTshopYUXdJKmL5yeDP3ibAuTL43o67wW8VFDsATrJEhaw1",
  "key22": "2LEbAjw1sDEqfpsnoGuKcm2c5PXWYmHtmeFc2gi2vUj9A3MoCuKKX8G22Q3MFnv8AXGFqhy7AhcznhfuLEtHQaJa",
  "key23": "54BatnBDCX1LBCWATn8omMrakGVF3UFvxAL17tXaZQGKPW3C9J3akuoV939eWiNjpUUumV1DFFeEse1ZNVSwuENp",
  "key24": "soRkkPX2ZKprpgajuiiLLQ9kRCP8SK7aUYYpEeMcqTRGbBsKv3iNEyVPoBNqhX8suNsKfhKcW5vPAGmiusSVvhm",
  "key25": "4QncwyER6SH2vMkrfyFdvwNuSj7vaLEWiAp8PHN2QPZ4D873NDS6smsoikqF1F8jQQ18fGGuKoBczVZx27mJqVoV",
  "key26": "5axfbtMVPVxshnDEBVj46mh4vDxRi3zMvFKwcJY5df6g6QRBVfbhwBrA36NXjND5sRqLJ9XirNsYx7NUFR6yQg54",
  "key27": "3ACWKuahG6JqjFBhjFkdUuX2Ko4kggKQGNY4k6coLhhd2i4hKsc68wbMp3hum9cYSbfKyrR4svcEcZW7c7hqnepU",
  "key28": "5yrRWZtmRdpb2r9xu6hzCs2itzmXxCGP5PXRPgrHNm1gPns4KNx1oFJ8Gffc7xogkeoySFgLhyfpHQYyzGogZ75P",
  "key29": "5BnTBBEnh25r9J8GvSPPtbY6TbvuCxy2JLeAHC66QrCqtz6nPoJP97iJ7ti2EFqbhbzwfugvcnVBnuxpfp1XZgKW",
  "key30": "LhJma5fj8jBrCLS8YbJ6tb1756okEPpdQiKZEKfBFPqcqnaMmF7QQHE6q8vjNvganaJDhhCCBtte7adeeh5yVQW",
  "key31": "46fsAKkfztHZhtsgRMFw5LqyykLYJ3Z183Q4UewutXEtS3sTJXCSXbArDshtfcohuV5DpjzXAACHtwJXRn8LjnC1",
  "key32": "4XpGxe2ANFAgESSDDhDzhpDJLuh26qnctZdmT1SiPCGRQFF7tgaJzyu7tVeF6DfeJySm7YyPT6GMUEVEkpsqu31a",
  "key33": "5VizZvqfpTPZvB6wjoaLrbDjjyUjHX9vWWLNa5V5Vxuc3UKjGpPEtWFpUx9QciSpzigi2EuJByvSfHUfUZmBZA2z",
  "key34": "4zdEmg5poUaHLYFcjFFPhoB3vLbz27PvihnYiuCFx8BeHy8jaS76LM1x2imhJhUnfCKv3TLdzqRLsiDC7mKc7bRM",
  "key35": "2tx4hXgpjMyPnCEN7EQ8fYz7NqrceB9z8RY4h866HXZsf9WtCZXi9mhEmXtmCAy3ZaSLsPVvAKSDCkSgEHNdyoxa",
  "key36": "2rm3G4SHCgrxNJx8U5H4g8SpwfqEt4R6oWw4jtsWPhB9oCDJQyBEHxsRamgnJmzKSvX2gtr4QLvDQ7F3ypi34uHh",
  "key37": "54FSnNgQNmWznWasmyvK1J2EcubkhtXxmrgrUnsnc7UYQrf8LaPfCFXcgK8Wy5Wx3oQwoqHfx144ndYmEouCjjty",
  "key38": "28URrHF1FaHSb88QuhG8bQiqgTGgHtHGgtP99n7MyT19opVbG9LJFAj87xwd5oxXUQthcKXW3SUyhVXoHtNMqkZh",
  "key39": "4CxU92KnVxwwmWdQwZioAyUCJDxZBxZPq9geG11W5WKWrsrXEJqo9zkgqqWVw3YJznRf3ourjKMKPW72cerJ7jrL",
  "key40": "5U3xoQiScTtA6t5n6e7Ezw6agHLh6Nsp921iNRFGaYwYCWAK1ZtE29PJDthqwQF9mmKEaW6wxBPaVXse2ueveNhx",
  "key41": "443ZoNebRVN4egSRUQo1s1z3Dz8648U7utaZCJfJER2NM4dUmnpa8PkffWVNuKBYfwo7vf12PXe9dcRemZfnxqTC",
  "key42": "63ADnnYLyw55Cckbb1Zd8taGYfWQ1Z4eHhNYwMfmH2N1TPsaVu5D9q7NQGDY47f5qp94EimZ2WUPU3ynbNWXwL3B",
  "key43": "3R9FsZEHqEKJpPrprtztUU7ZpSRM8Qmju7vXJxgYbFwZEuofyxwMayGDfvS8vRg54VGSmJ32i32aXE7s5GqWXLLz",
  "key44": "3CY4dP6wt6zLdMPUNvLCoCJwC8xnyNMS3KPXRwJW5jyTJEz7MuYwcmFEcYU9vL51YFzEhgG9onBSEfHPfQB6sbCL",
  "key45": "5oHJpaCHr79VSW2X4CkFDKB2VycCpnQoZjkSYxD6Ds3TVBoMNHxzEsboVxGLRMSxwFPwpiN7o2wDdLMpcU312M4B"
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
