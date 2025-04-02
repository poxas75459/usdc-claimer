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
    "3dvakrdppn3whRNoigVZtVwXMALSTB8C9TTNtdCWtBjq3K31GR3K7ga5aND2ikmzYZ9ErRR3YJ5KLFTa1BuCocFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AZeb8mbqUXqPyUDjzCpUudCGfcSdywWhjZDbkrxt9MMTWPejfQvWFFd17LU7JaiDt1wRK5L8MnYYie1EgfBmTpi",
  "key1": "3t6CqTtfy71YXHBhXHfHE5M7vccvDrp2RP2BufncTUJL3626XhbkXqxGdw9bwJBbzg36mgTDVpdyCcMMAA6T9vLx",
  "key2": "4nphENrNavDGnmCWENQ4DvrwUy7AczgepafDo8WmphmaGUwx6jAdzVmbhhx3NEFyDhhCFzudHjJY8rGGerih7dyZ",
  "key3": "2nDQ51J75cYqjZW6tHiyX8HAdRzZYMzyMn7zaosTo4p257EqpGXhg3hdWgTSpwKqRv2ydqEoiky1pYKBJ4R2Jqh3",
  "key4": "2gWh6fUZ1sR1zjEuCDpTQuhyj2nPUmzjcgQHCWNQdtME1GeTVsT8n49P9QhEEUQqhj4y1VZgfMXzMDvFqiMGwxpJ",
  "key5": "4x8VJmvrXB2YbcT281uEtby4bqnb3nVEAWHfAso5TVj2JtEnw64eFDxuT8MCs3Sj4LPxtG3aYL5rpATavWEiNtXe",
  "key6": "2cxycKxtpBM1Q8RbR2GrYjRerRjr6n77Hsw3Qh5iUW8WNvxSCsUC5dfgjVJiZhVMVfN5hZz4RHx3fKN8SfZ5fGGS",
  "key7": "369Bg6LJLzF9gYMpPMbbmJcoCNZT1QxZDLDzWuDUcma8cfdiHs3XVn2hbPeG8oPxJM1zFL36v5qmiF4n4CymCVA6",
  "key8": "59Z1sNcfQnPixcaQfFe9c1opNSAysSfVRgasVKhARVaijBX63xzXZqQL55DR1gz4SsHJUfw792qVtdQtPvoFZYo7",
  "key9": "3DPnKoXnPtQTecqw1vffUpsQa6E8NgXHuhiRvEeovwHUBBAzADCPAchVKkxTjc67WuUbnXRHN5PLVU2ZGBVtAtTp",
  "key10": "4BAErZ7cowTEPTRiwdyQr68tHn6Pspx3Kt3KMpvnKdyscrzQqsb49qzMMazvr4LNQ9moXKE6pDmtRroWZtTBnh7T",
  "key11": "2Fv2nwsqNCUE6G2zgtu329m1k6uCQNut9pcXsv2ojoHqRGxABc3zp5Uf9wxzdyAmJxQwcoaKkHyATGhE1LB79Q87",
  "key12": "3LvA4qj46XXMvKPiULdf5sDbYyP8qpdkfQX2xnpCCYNj1gmSUcsBAYZFSmTNtSaPE6icFtoFEY6QmuSZdzFBsqVr",
  "key13": "3U39dE1uJQx9bW6G8qPRfrQTMyE6k8wyDLsk4dQbSe28XLCUo47dRtkXAyapaVYATRMTZUKsJ4MS9PyT2yZ9BtNW",
  "key14": "52j43iAxoPefF4TGr5mEdw6rbH5kqH47xHcrcct848538eQRpNM9z6v51aVDQAMHPnngngRKvRky4TyhQ71VEfFM",
  "key15": "235iXYrGVE1xFtzPu7Lh1qDyZsJ9h8bJNP3DEqXNnUmLCkCqxXKse8RauFcDwHxjRGHx51VMVvCaVdZBvpU4uGN2",
  "key16": "28oah9QNdEyb6LaCYhQgqz1oQEsh32X3XQ8rtX8SgejCc2KeRTcWYK35pwGbiZsKP9AjGVn1N6rUa9sdEewnSDNz",
  "key17": "3jVLF58MjD7roW1ATAv97C2ru5fFMDrY1QQYZTSxmgTaM7y84kfXU3zoV78o9FjyPyf2m9FFpkzTTs5TrwPvd6uv",
  "key18": "29gXjCZCedsdxW4ZuYjodK8A9dgG61uQkSbaZGS7wkwW6bVQkvzrtZE934Uo7L4YzxpuL1f5E9nwDQKmPcWNBBzf",
  "key19": "3y9RYK3HA2TisSPZYRCB4Ad2RkggPhkxtiXd2QMPi2XGnx2EJQVGJfZtf2jgLWJK1g8xz9qoUhvuziobt1xMUkXH",
  "key20": "3ExqPXo8dPbKpTN71d5Y8DXfaem5HcxLeYNqxSu8UvkVCbWScDP2DnKTyRFakPYAsyhxWgsRU89CoSvsSUoo8sR4",
  "key21": "4y5tS94t98n9h8bpoUjVC1yyC4RaQjHyXb9umiQNySGggU8EbuhUfnjmzDp7iCkFgpzpsZhGZZXopHB4LY59gcG2",
  "key22": "2fgujGu4mZVf9Kr1pqQY4vkzNQ48gxfe4u4E4GzE4GfXJKneHmCU6qFJuoyTtQ6uGvbuqpnKLjsSidZ67FwEfU9u",
  "key23": "2JfgDKZJQJ2sHK8Pzv7ztP5whFQqnVoTjiPitXvMRDcnxkQ3r5YwacCWoZi1GJvLbaAb5nCBQoEHoLnSRDTkd4Wi",
  "key24": "4vjKLx6orcjzRMvv6vMDKX4N6c1ZyMdUcynAJaMerUWouqiNv1iCCwywU78W85tsyTtoSm9TAjrpfbT4AYUdNMAA",
  "key25": "5XufdH5ifQCE5DyvFpQDL9S1amaRbCKPUp5KZ6ntBj1echa2ZZj1MwSuKsXpDmthfG2tSDkGSp2X8v3fWfBN256a",
  "key26": "5Q2uBB5SyC7j7TgLWFCayXWLmBsfhzHunNVkNuCuNXDLdpbxGinW6FrDD3wVbaSCTgWtDfs179y4WmYjMzWuMKbK"
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
