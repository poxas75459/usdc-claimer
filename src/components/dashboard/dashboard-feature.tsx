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
    "32Lmn7ohgu5w6W3XDHDzMejJP2zajZEy37GTzyZoFmNBuvFjfoCY7yYZ6ABEBGBTCrRiPQr2NMG6ommFkTCaCn9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vDrmZybth32x6T3aGCiwPPwfgyuvV6UBfzXsZTBJzyu6TpesXbMDTN8MwcEnLKa7ZkELRYnPEbJeoiqastWPALY",
  "key1": "MSUqwr3zcE6JgjQ6yAm3FFZU7t1k2vfWDYWUwmYdcKhiGXsLPqCZgJop3tL6PCH5GXVPdeAwY7AQRgEd8G8XHFu",
  "key2": "aiy3vN6mML3GSZRva1Xp7d9pXc7vurSYV1jeQaeC7KRNh3uGiDYafuzfTaZVQ6hLiccVWwJNvfSXEuB1cySBx2q",
  "key3": "5t6bLbi7ry7tvg6cbBCGwtbQiPHcUAf4xJkhMsqGCs8K1sXqwfyUCBT7AFEYTq1ZP2xSYwgbXjqreETehFuWuEua",
  "key4": "4XoaphALTwVE4ZTp3WDugZUhtB9sd4gnQNvUVFwneHk3opvvmhLpPec5D4haUUtUftnBLkvnC3zSWUr57jbxVgkH",
  "key5": "5oRnzcnZQZh72CSP5HfQh3ggGinnyRhfXWrrZqQGu1bGXoLoBPnTJ14ipZujSGyaZYUF1EuX1idk2zfCGBWKU24T",
  "key6": "4bMtRWRizatnQezwDhkE7FpfTH2YuuQ3izPNFQD46KSEs6FeuxfeUuBmcKhboYXXMufHPRGBYiSVqwJuYkkHBXex",
  "key7": "25EHyUqo26EC81ji6Pt3AWSJvjGvic7ZkDRnZcNLsUuVNr2ASmwYP5zuaxYUdqLLZQn55GQi1aYUkRfLtqswLFkP",
  "key8": "53QwayA9hz1K5npazhXWk9a5RMV9cEQoNqhxA8vtJSczZcJGCoQWu4h4RSSVFXUEFPP8NHru2e2JWdrcpqJim1dk",
  "key9": "4pEJsMJsZET43wRcVN375Qm77Z27aiZsbgsSeVmA5Lu7kyqkkdjRfZoRwHpmAXJCm2s5y7Yrwyr5741sc5CrmTAR",
  "key10": "5a5db1xTvRMWjRQUSSjGELvNprCWz3vWcseY7cU29wyoNsPZUkFmu4NGbUBruAJwHc99GuQfmp7JfrZajkvkFb79",
  "key11": "RRRXeEzWKH6nkyGZFZ9PYPBEuj3nXD5zZwpiW7ka7HcJTj81PHsqvEy4poesHMht3nwFRQLPo1U8LexqascVzzh",
  "key12": "5Yd2Urm46Gaezx9XW67E86a67yWuQp7KVELsEf3z26MmwhoyebApFGVPdQSYYP6vEzy2jiQSM7Db7AaxoNAyu9C7",
  "key13": "4Gsdkchq9u6N9ycpvbnVZNNgRRrP778MzM23zYumx31LNbYRNiBWuz4nDLx4diUJgb15h8xTxj2dC2iTm6eDFBkT",
  "key14": "53kunsotof23QanN5LFYT27nnkaTBpDbAB11LAJif3BNQ4nqTbkJ7RpM5ZsZ78sUrTpVWJ1mumXA4GNRfzVjP3Ff",
  "key15": "CNF5Uy4BKiAbHj7KFsgsQT7y7wP3Hauxqy6tw2AGpUfGnVHJ1Y24HYKoDDiDLdXGZHABpoBTWfLK91RS8PunaKo",
  "key16": "317R3EBkouk65W7jpQL9mZwGruKrfvPn1PRmAjZ8SBq1p96qqgRQbAxa98GvGUxkiinJ5H6mGUZ8yQ5SZGtCh8bw",
  "key17": "4p9rRsyoMfe9Dt5vhABkZRnS45SgXguXhVE6fvEQivGxY4qQvkzHr9AVWn4aVpoK7n91JFptp8R79PXNnzWXAkZ5",
  "key18": "5u7iMAy1ELXPN9k2iJsXFzPF4ZuSHtdUPTjSPBGF56q15re5Yjnuj3kXBjDTv4H37RnVjTA2DqyYH9CrH9uXGxRn",
  "key19": "5C3sYkwmhLANJmGWm4CCMJpH1ecBSQYdGXRLP4axGC1QvehVmgE4Td695oVu3JHA9UuiuCfA3JmgrFgyzAVxBLNT",
  "key20": "3h7yjWv7FTvssjdPPTWZ8q2674yBPwAUGBRUHVsv7JJW5Res4H584C8c5ZQByMRBSsf9akZAmNKwVPjU2oZpYxyM",
  "key21": "dz4y2nfAzZCoovZ9fFJJwzoYBDUzjEsdUmRVSG23iWE2ctX55yLBMCLzs5RRZgVRccNDiuEjUosbudpHT135Yg6",
  "key22": "5cSvvcdyjP6ELpEBAHXsLKc5CQZdfUyLipqn9dvYjnivdr3LZrJ2iDugkiFkpf1nXzBzU47Yzwy2mpL1kYa8KggM",
  "key23": "97vx377QA4HjrLq7jwhTjdkEqQeB6iRZHaKSKDoZdDSbxrqbsJThkfyGa1NLqKDPjKBuib39Q35X7mkG1zYEhD8",
  "key24": "3iaXAod2p2VLrcKRMZdQxkdFLwxrkvKKXPVi9T5SXKt9hPGTMGmCT7oREobhTAJy5775fkXKEmXZBSbThHMKnKmj",
  "key25": "4tGhMrbp399M8H3zmR45ZiZYmRZMLsHACTfo2Np7o5QotTnKt6DDCACXyoSRs4oJ4j5i1Sbvr5YG16TAWWu8EMKK",
  "key26": "2TgeyJR86atneyb2TgKZdAEDT35PjWqbenNd1zTwfTdZx9JrzUg5CkybD2DbaoaxQRxut5VhxueNffMwGhXmp5VX",
  "key27": "3A85Y4yvCfLVR8zMvVnSYvbAoE3zFnr8wyHQwFQN7ig8HCny7BumFS2PkEazUEPijNk8Yr4gYEhBuD4LAtNtN4xA",
  "key28": "2G9EV7h9o2zchVdYCZUp27QWNsG5cSqLmr2cJ7s9ByGRtgmid5NyoTCF8tM7d53EjGaTqfREJc81fLG3w2hn44iQ",
  "key29": "4qwWA9RadyhC2fqaZubJdDerCYHGfQsJzSoRvxftZEmfwa9REwZs2h8bSaz3Q3QqZepm7BnCMuYNXFyxyFUU87k6",
  "key30": "Y8yGwfutreuoGnWcDhjGFpATupwbPX53EucK8FJoSY6HUPvMHESxahckW94i88WFhtLFWGdFvRHK7QTULnpiRTM",
  "key31": "4XWgwSxumHqagefSCnnv84orBMiY9bkUXBnNgBXoKB9xD3DmSHkrVpivKpngBBeBopg2nr13bsRubiWRbGjyjzdo",
  "key32": "5wNwxsMdqXGaGdu5Fafr6mzYS9snFEFxbi5HnZDab5tL5MzARK7YeTAyDcXTq9T1JgMRQ2JDBi3MozkDLY8UevRX",
  "key33": "4pMYMaw7Njizdhi1uNp7dVjoCtpLd9WJDUM6f4g3gmrpkxvUV3FErUhifKHbW9sq1nXT2HmH5ZSFxZFyP492RrFo",
  "key34": "2WGS9Ts1GKsPbH3tYMbZuGC8yv3DCBgpGwgiFUHtPvGf2tRbwZ6k7RA2ZjJMjP18Trr5jWVeg5eD44aqoC4QvxQs",
  "key35": "qZFozPT29LFz6AW3Ziqa2CQ1XuxcYp3i1rKmyQ7dxuDackM4wFBXv2LCTaFB2aZwcktegd6TepbjSawEhN5C1nA",
  "key36": "4gnBFKRi8EpzXFxgT4ixSFPZi534gfteCS1FN46Snte9ucgUDpcCk1k8y1rMDMsDstzuzsvq83gKT48Gecxz3vKb",
  "key37": "43coZB5LrFE28rtUPrHVLoCbkNbGZz9MChhFE5D1KPi7pN9Zaggkc1xyA3eMhWadEhha9k75nRatkH4E3NP5amxx",
  "key38": "h7wN2GnZAAHs285R6twqV1ZRm3CXMkoNU8pp85VyPHf3LXNf36oEsUEEvTWmqHJphcyvJpin5JPX79P848hMJuW",
  "key39": "5DUPWaA5sP58ReNmLYkrWfrPYowik3qmxhTRDLw423npEVfXGktzpEs4Zwdv494m4J8BBQNrTbBbCcHpJK3Mijxr",
  "key40": "bgwmLss94oBLNrmVfch2G3PHrFhtbb3dd8aVSnNay9G1e6kKDNUfgpsXzT3Qx5wDHddMtv9GiqQxHb5Dy7fnaYh",
  "key41": "49XNpCrzhY8uqJBYXWyFeHQ7aPqq9Ce9WRo97QtEwubJf4k2KNXJVoBvq69rMEhRgreWEYBrwQ1BkGgHG9SdSCvJ",
  "key42": "5crKbN56v2eNyu43mxhh2Nedwst4yXnDLGFSPymCV5XrCiLK1Lu5nbjatsp4RxJqaSbLBD1NTGUdqQVoGphkLLh",
  "key43": "QaSsA5gfAPSYdRVTM2ZwXvGA46Bc9hLX7SiPJZviwsnHMcZMRQZJJfdrevq8yhSn4ijqFfaHMpPKD9ddWTGuwx1",
  "key44": "3TLS6P4YeDWCwtU3BcSBibWxtaBHUCouPmTTmcMe3sRcZ6srXBS4dbiejuHppgEo5hnevu5KwLRKrw3DFdZDDapS",
  "key45": "5tZE8bTZCJQ2MANHuEv14qBFjK9N9kHVxwz8MuWjLJnPDVTjHTTYYE166J8hN8hwFvxJxaQ28vS3ieVHfJW4Uipo",
  "key46": "4F9zP7YeyADTFP578fkgBDFD9yACFaWZxRdpL4h7dRS8Dtj3nEvQRCutSfR15FCy5iE5sNnsTqNNVUMxehpQtyC5"
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
