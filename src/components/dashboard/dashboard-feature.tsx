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
    "4HJAdYYPRMiRjJeGYHC2exzQ28XRwpMdY9sWP3fKUcsqEaEbnvcJZHv8DMnu5255ZGCdLcXT8HJZDEdawhYUewEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gksuYzpGzh7ncigX86uxoeMvfs9dEKoCnXdi8nN9cSUoDCA2UgjHVUi1FyVayBmmktgQTTTsgTC69sMND25AAWF",
  "key1": "4TnYzynTv34nDiviks2u1MiJd7HDTxN3cNST2PrfavYDkJq1i1pZv6Uv8wiJgMmKdtp1ho3BCDEJ9pGpGpPuDk48",
  "key2": "3qqh89YYrhzbnkTXPs4aTVREJCH1VgsbCaJxXAEDRsmVYxm7eSVcxmsA6RGvZ3j3Rr72MJtM8i4MLVY1aMwgJpQZ",
  "key3": "26SJR7QJZNTCv9vbJu1wm4D8miPLAebSAdqYJY5Ub4VdVhAqMhvV1MjVUjHcmZeS6iX9m1XCTrcPwnEmFkZadaWC",
  "key4": "4L7f6vD9Gai81QhfVZywaVyo4tb1EtKHHhQdiwQnH8mnhyWFSk8JPc6z7i4q2fZsvwaujt2tdGfFH8umgDu65jwV",
  "key5": "2rwrq3xToNpTSWnSueTpvcHQhnp8apVUGC4RCpe5H34xCr35oXGyoeejNwZ6V2oGEYTh2mJoqZvTAbitRSz1tiZZ",
  "key6": "5ogg8FRkbPyv3WMQnuAjq7fs3vWyFeWvzyuU9NKT6LUMwrwmwm9zrwM1EKBQfr1omBaPC8MUryFewtfwxxFcBuLF",
  "key7": "5No2uu9As7Ac1psp9Nbb5Xr6eZ1Y9CELGDUGpN2m2caUTDjJiYm2vHBxHa769R7MPEWBNbrsYMjy67vCLQv4fuC9",
  "key8": "2uxt8kYiJuetqY94NqLRxwyHc3Jbu1oQggWvq9ZaUueviRgZrYgbyigANVAwMyEhfvMk7ASUpg1VRiBnNnUNui9R",
  "key9": "zZAiA8CKKWpj5kVtzc9vWT8DkKL6Gp8qKKmhcNeMG5BwHjG8qM9eDT3ghh84e5Yk6wJ7dXQGurnNrheiGizzJJr",
  "key10": "2FnhebCW6P6vawPRGT2EmwU3fpmKmWtRkUvbRJiRAPg5Vt5nNhaXrkBbB1ZtvxTgwx4JDPPieortLfQGccYr4ijq",
  "key11": "2oM6y81Y7N8WGwHGVWiCSuCPJ4pWx2n8C4nyGrhiSGEPUjayAhSnC7bjyapbyKJTyJgysJSGTWdSwbL63TgRchxX",
  "key12": "3BZqfSpLXRYeaEzZjME4Eq96jStwgz6pXbSLggHTidqynfGbhFQay58cXNxGCxBbpPJEBL1C14Zsv6DBGjwmcGF4",
  "key13": "3s2ENMVWHwAhC4cew1VetWtdhDqafm4TY5pbAxtiskLWsCUJtNU7uprvpsek62zHUZfsoXgWB5T49oPECC3J7Umw",
  "key14": "4WBaWa2sAVkD4yfGRo7x7X91jFAojoKqTe2fP8XdrVgcvLBCBgyiWXYuNXm4jc2LCSGJpX3KgLW7dDWZtYAeEh8K",
  "key15": "2cjTdNi2fSXVSbaNF3YLhDxfWmxGXpEbzVFG7wfyPQjwmaMnfdYa4nJ73H491G2phqLwj4HwU9SXXSNmPVjffkZn",
  "key16": "vnmqeqzgrfXLZtLHqWG9CEZax6V1bWpaxxUkToVg1o4knMgoq3jvS5vag4td7yyhC2Udes7yeEAxgwXnNxB3tLM",
  "key17": "3DotiXg6cTuLthNCzUEtsr8eKFCVSzn37eBJRCiUoZQ4iFTWx2TZKayNckfyh2VtnsgUwdB2R9U3SKtJfFhESeb5",
  "key18": "5kvRoJg4eNFjHbf9rhNi3oWBmqnDrh8gRvgPByZ2GfWMvj74kbbwtj1sAZMUtz1z7VdYdiXZxEabRFycQy95sch6",
  "key19": "2ZjDiaUH4vqszxLDhiRhQ22GQeMurxoguMQF4tU8dXNCXUzhX6UtYikVt9WsegSwFsRqjP86S8yZW5v1SFNFdEnm",
  "key20": "4NVER5Hb6ornZcXLdGErNpkRe3DRQoW2VipTMbrdP89xSMVsjJ5tYfZ9dBrjXvuQ2T3oa2f5GRQg7CMLzdbyhKpV",
  "key21": "wutbqX6Pp3E4SXNFtWUQwkaQpvp3DtCFt1KA7QXDejFZ2WaAtNoJCN5ZAV52AvN75WFv9hPhzwHqpdvBTJvxJhr",
  "key22": "3neP3wxzKr6b1BurrrQkKRAKeMKNJQYFBLCJ5aQN9oMPZchbEjyor3wzHJStvX8t9btedop8y8Vm7tdqNKvNwdwC",
  "key23": "5mbDNUjfEbrTdidKVmRHcYaHg4wHuojAmTJrHeVB4vpArxdToFFuGpPKkGuq3Tecv8LpVSUvidzxRUT7V2y2nL5m",
  "key24": "4Tmfx4XcWQU8NJEQ52ShacvAugZtTdkhjDqMEJibXrHBqFPxJrWjVoWStrREmyZ8KWdEdKE3e6gtUhMyWh8MgfbD",
  "key25": "2KVFeb7xj3FhqnpABsHsZYkTwV5wYqJ21b5S5DvMqPuGJg4vj2KQKKnLKfdBxFNVAPDfLgBYLbNbhrpvp9ZBVwp2",
  "key26": "98HqAKjfWq4y59PMXgNd4wzsNhycd6N5FUv3gsft3KNuKnJLDeG8xckyjkf5ricxRybv9ia2QGWq17xmu74bnNT",
  "key27": "5g9K4voTMu5CaUWtwdFN7Pc28Vm53Zd4ufG2J6QLD5zUEXiQZmzPNAVE4ayKiL54WjajX8FxW5MoJKPBF6RjtrP2",
  "key28": "3MVj8tf7H1UitkpK2FVCyPjWop6vE6Ni7bMbVgj5b2cKbwZhvEcKHCQkz1ZBFsGnG4JQ2v2Qr3unymDP9KUYE7MD",
  "key29": "37RTkbwmQbQVXZfjcLuNosjMJpdpzyyh1ZSVLXj97ogLGq1qp8Gpg8Dq4mSsdg2rX2ue9pm2i6Ed7qmpuHVEhb9J",
  "key30": "kRxsndxP5pzaDAfaUCnNpDi3Fdj9KWmz6otV5LyfBMGZApJpZwwKm5GZpnZNEuXByFCe45EV68HYRxpHQhkStEv",
  "key31": "5wLxEB5Z5gUYi7gT7QyNdoeRxJneSD5t7LhP7pv1kEio31qQFkX1fZinfHwHnf83ejMpLuFzNmtPn6pfbNiZ3MPr",
  "key32": "33zRfmBbVFjUD3zxevVgPoK1thgDa3kpzUYTF2BpdqCVeYLnHNwmD2LTvU5MUatvbvagwKWdhcZk1tLZsnugik1H",
  "key33": "58jmCQJ5FWsNGxG8AZxXCmuFaDCqAE6QwHaYczLrE4WRtZ2LgwzN6R8Ei2cNsCDzRKY5dxNUTK5UKkzVjX94RQhL",
  "key34": "wLsMN7meRwA11ZUGgD3HKeYLuQHZprtSxdV7MC94VxjrRn1PytnNP75TMPJeMx6gGvuYZ9gyaZxNEZoFZtcjfD5",
  "key35": "4wAfxzd7ynAE9hzf2T5Y4A79csj5bsUzcrXSKz7nihWfGKaHDAmeYGdeuvcFDvyh6ioqAzn3ev8nDDovgA7PyowE",
  "key36": "27TmgjQ4HxZGkESi4kPWGXFU4Abm2bhpPa1mZGCuoJ5qcUStSJnR77aD5pmHHAPV7H7nEwyYrceSW9JPM2Q64j9C",
  "key37": "52ZnDPzbcBNTrVPoCvnTJzsqgSdJnHzQoi57yaibrWX5MPZk5ay8RVMMCtSUQG8YLoTiwtwD6HngrjM2kLuaFgow",
  "key38": "5jvGKSuNiEJeV1Qv2nKtBsWoQyWuUntePiujPMmWbiTCgqbPsjYQ8pEkTLSE5ZX3yLNMgGVKzrTNkZHQzPtAQarx",
  "key39": "5zoeaxFM2FztrQaSCxZZ3MBb3qF8XmaznkQ56vkggcyijBK7j7kJLLEYMYV81w3QM4WB7pemj7tLQu7oLj4oA5DZ",
  "key40": "uwemBCybiUxpJFNzVE49ADWM2Y4tvpyL9YX2VovgtyNPqfcWL1uGtEbjxoUXVmCk7APM2KAroiWph4XDPoWgHmr",
  "key41": "zvwg6birwSSgZ9MhSfQDYqA6kP2tuLyNtdtVE91SioEWNSpCy3rsMn2ryWJrEFCNBMDrPZGYocPmUJFgRZxpTAG",
  "key42": "MLHstY1r9zB3j3Deafo67BKycFMYXPpjx71nSzkiN2dU8kVPFDnq3Bh9qPV2ivCBJ2UB3y4xdfBEhzjRnDHZkWJ",
  "key43": "28Lta9BDWfLYkJ6ahfRBF1dSrgve3xFgyq54VNkSyK3mBGVwMbGrxNxbbeshQZNmSFFgQCLYtbQyny6r6es3smqG",
  "key44": "oj3XP6LndL4nLWHaoY3gKbMZpGz2DGLQwZJfK1EpFDJsKFfe64erjQ83r6iwmNi58TbzLqvLu4okPfjmz19k4uq",
  "key45": "2fFdPyeNC8RWmA7bymFd1bNrJRKUhZeJoTZrgxbRXpEbrYUsgyFNm1VCtwDdesmVHTJ2e1hhsa9SAAfS1mGDUekL",
  "key46": "2rhKJgmgMZ7sTShPsF4xdf6gwz7McrE2dXNBNzonf2dZT3aLXHDE3Y4TazqEYt1zToRhm7haoYV11Lb2s6aZB4dG",
  "key47": "2uGAaNfs43QgUgy9kRDKwbbugh1Ga7QaZqyBEwgGu3oGgN37B3MupYE9E9zKXiSQ43dWX3wMv467tPogbMaqB3Xq"
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
