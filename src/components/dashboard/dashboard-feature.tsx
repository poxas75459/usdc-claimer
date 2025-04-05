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
    "3D1719HB6Eq7nL1s3CFVvuF6FuQdj7JwQepCwYSdLE6KVHaXuWC7TcrNWeJLJ9x2mU7YC8BKA1b4s1iZasJ6zeLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dPhtYeo94fuwGN4PzgRZksSSB3PLmofA3VJrJJ4KR9xW4PwF5SAeJ5iRpsbCY6GQeejUaCvxcuzwJ9FYDhHNKSr",
  "key1": "5VAzbmPgdEPzkUqSFwgDyzEAgyHFfp4qzNk42GtZXVyY436RMc5GCVFiHmHE6Cx8bM2rjGyidSN37gYJNJ2eoNfX",
  "key2": "28U8eMgHxhebFSyNu3U5WnubWtUQp1N6ksEcWNToUY4VmUAh68vnYbuckPVPxxWhg4Wqm5LJxBPnZtnuy48NJFd6",
  "key3": "4DbdhxSTXsBG1NZKrKZhcrRPDxQfXHEf7NTam8VtvKKR2bKezNp39LV4KWKb79JtmEDFgXPmP42ZNfwVPASimVHn",
  "key4": "5d2o5FXDKXWGaorJiaAkFrPXPkhsHu2QXj94uKvfxiLik7Rak2F8KWscpjt1FSWkpxrcZh7Cbpv55ubtNpkD1BAi",
  "key5": "4ed6o5iXpEMTyEM1fYY1XbWbJhxjJh8w4qzXiCd1tJ9bWmWp5hEsTHuVML9E3MPVXS8dJKB6qfxTzDD5Fk1CXd8E",
  "key6": "4rzzQDgHMKcDF6TLWmG2b8wXPfbHhs2BfAXxzepVKDhswRWqpMF1TwyA63DdJfhsYtmtapbTtnMX8YCXDckvzCWB",
  "key7": "3Lm2S568EpMCCZFYuENyGsqp74a91rV8Zu1XBQFm6zsMj184h8HE63ojzDVfBmUuXUmbNXw3G6mk6MUYuRXAXJBD",
  "key8": "5v3LVNEsBcbKvVMM466BfkQ49d91ich8BeWQp6iPMj2nmPfewKPZ8SRaJHAY1hmgajpm6prae7YWxSmQC36bL72u",
  "key9": "5pp1hcU8FDkfovZ375hw95pxak2nHUdziqZupcFHr4Ek99o8RC1zegoKonR62i1LHLq1g8d5g5HBc9BnZr2Dwn7t",
  "key10": "4Msc9cWx9HmsJvv4vQGebDzjCnLh8kKnvs3oQtALcSr92FUVsgdAaHoA7cc96fkBVVDKjuSEzFPwraEMFL7kFJd6",
  "key11": "8SnT3sCaFHcRagdVdhkMaYZbyhZ5e75tVrqiL6Q1D1dcejm2UdXjGrpej6RdvJk1jM8GXaQLgz3bTwcEHmRysPz",
  "key12": "4G5iPz1Zid4ey5TggCahf53ZrgugcyyQtFyTRPT2AJS2kpvhdtF1ErhQSFnioHqqpf5cNEYXbVrxjTnYhwjyFEc8",
  "key13": "Y1BvVACHJc1HT4WHQTcQWV7QKk6qukgYYcZ8signdKzLW5WH3SSxKy7V3dop2REKDAZSWHT9Qwn1L88rH84qRoo",
  "key14": "3UeZN8iQbPnvQuQrYAKJA9qA1qDEDnGR3UfpH7H7CFR6Fr2qbKgdXkZREpFPmPsopMNo9NiG7q9KtJCFxnsUh6au",
  "key15": "3ZLaUXobg2AjXizWHzcFFhLx8emeP8V6nGxDdMBW451YcgHGKZh9E6pGrEa8YT7xiqqLWYjPzNYwivQ8RTsAtwfr",
  "key16": "uJhkmgmhaU2ACcgaaysUqaPV6q37KQ3bBn2L72QAQ9ayrjmKiSh7FeNkMLWLe4GinbjadQRFkStgGPo5gxNhPHz",
  "key17": "NhkJM6VJikzho6K8GQtBsMasL9CGNNRKTRgKYsKMBpaS5CNHaRaFmTBUtn4rts5zecukvfmhhMrDCtDzzNxhd9B",
  "key18": "59q7C56DZg8ukXxRZcfC1JxiY3CYfHK5Y8zDPwbJ4h3VjDHqhHk6C78yCULEQF5WjKsBJmqPZ4SzuKqPXsiKXCvK",
  "key19": "2PeDqbxRzAwtf44vcwXD5G3ZeMUudSXzkC6ZcH65ZoNEetevn8c8ghFdCecAmG9osQeBDSq6zwPVTfvK1yN7CM88",
  "key20": "365RCi1H2E8gaeQcbu9tUf8Cu952dymXxMXnT1ofmRffFJdiJeSb7noAB5W3eeWtiLj1tuh4S39AtYMmQ2TjDV9c",
  "key21": "5KRq86GhDTmAcS9GNtXot7DCPaLynzx5tTtZqnG5cRu6jkm6JtLc3oWMiAeLDVyHR5TwFwXg6f2F1WxfqDeQdLSM",
  "key22": "5e5V3o1WTgPQYZ21rLwZQWPAjss22gKxVGApEE79BJ8r4Hqn4p7WGyUP23dnDP7t67R2T5PmdtyVnkgzgzwHafd2",
  "key23": "251rE9PJyVQMp1CLMjm88UWe6LJrtw5ZKR723BtwHYowuDYJcUY1uwVqyMa8ZZawr9dYtAvSA37GRMVRJAR34tL2",
  "key24": "2JRFEtB1bgTLGPF1Nj1cgVUCKiDyZZ1NQvjzLADRTvc18zmm8GKdWQ21BdjEudqugWLB86kiZnu5fKzbZxV97vhH",
  "key25": "3yHDxhgV7yPU4hozgS7EUpfWZpBsU18tgvNN91Udh8m8h9bssmizxUSWQdVgLwxnwCDmqh6v2Vekr8hmHp6SXiZQ",
  "key26": "3AoBTRBKiufUX8BFSa4vNoQj14szBtqwoD2QVtZsguNKCYMioMuBwmWjjgM6qx3SQ3kL6W236Z3jLFgQhcNYpGHw",
  "key27": "2qZ3JM3Jz3gXPiY3frhscsMvH9FyhrYazroCfYzhwAPyYEggjAQBRuVdsJpZnAVhZhA9yj2fmWKsrucmLUDWJSys",
  "key28": "3H7oCsmTjQBP6YbZtCWtwL9k5UTB4AHgEUaRqJSPAkRj6v3Wf92aKjeVDj6v6nRSWAsxP8WRfMxRruwd32dnX9vT",
  "key29": "3h34qXmLGL3JfAZaHKuKaDU6hy3NwA1qZDwWibvgnf3keYWRYfXouvbh3dv4Pi9VaAPKVGfsLLUASMbyhdRMaCgR",
  "key30": "oeuQXKeWpFvbYo9ufzXQ7BVprgR6XKZqegnozFPprWaNN7tgwbApjmGWgu1APyR2TNPjvjNRdNRg7eujacKFGBt",
  "key31": "3nE4R7GSdtQKSfRmEVPgUmQUQyNHE73vJz8feaKxJU2PLtgB8uxPzt7S7cZruzwjyNWsJAv7fGzcJ1x1YVDFzLT",
  "key32": "42VZqhR72B6PWuQoQLcqh1BEeLGB8fDTaFognYa4wzNS9XmrWiA6EZcS6XoXPK2PQbuA9G5rSAyyyrLHT6KrsZh3",
  "key33": "325hUiNMtWFqsHrHfoKvwi2a4zEqhZRyDvMCJ4PzWhv4ZYr51rjnv7638cvqsxRGy8TZm2ZpazqnoYRyZJzXzYEs",
  "key34": "3o14EB2kNePg9QQTvVy5RTUw3PxytvsYJtV5hCzscz85PPt2iZxnrd9Ykepe3jQ5EowHaWa2eoyFsfVXErHV3w2b",
  "key35": "2ZhNqfhHzoRSA8dLzt8ZLHnpXUiLQ8Ws4yrtf3gNjY7ztM1Kf331e9D9FdNutGokrPZbvyWD2ZbWQS48rrkRBRL4",
  "key36": "3Y3HR3RqGEyURCgckM6iVevWfszSBumbTK1QNpxYfVTkVGQskPKqng1MR8VPxj4Y56jEhzHUzAcbStBRp1FdV8Qk",
  "key37": "45bnesKMRHWQAoNU5QfayDXs5NwgpmPDG7noyWKomdwBN2P5rGmx5BbpMK2DKvaGdbBnkuYx8aG3pF2fmxLPpPWp"
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
