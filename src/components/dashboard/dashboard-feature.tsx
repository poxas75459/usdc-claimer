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
    "47FHroMYDWgvJyRpmSd7FzSTqTc6yVTFqt8RNzLaWpYCbiEzsvwkGhRXdSKDytGYHTbsGUZ6Xdtp6cnUfTDxa3Eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FLGr9wE8hfA8EMxZtDe3XFSbSRKxKMSMXbiQrX4uTezTN4mz2WCCibqELFj1JAqmGQV9Sz4M5PS8CqEesz7RGkz",
  "key1": "5sHv9j9TdVwEqz4bRTYG9Ad39FV8Gt9PAgALJVP5GUVxENtLMAuW4KQaPMWXMqQLzzGw5kjDwqtatNPRA3cTR7uM",
  "key2": "dBRnJj4WQ6ePMC6kLEngodngRKTxuDCLVWtjEhM2G5H5t6s9xiEh3zJAHwjtqkeLvDtfimUGUmyipx2t1MvtfZu",
  "key3": "5fLc6g4woLEhjS3Wi7KV4PZ5a7LaEz8tB92w1PcsUjriacofDQsZi2QJgwhwTq8saQtZm1bRjrfb1rqxBkKD8PGn",
  "key4": "FA7cQK4aNsqQ8NCBiyAavzhAS9mAu6ZTp2Lyj6N4dMJFcMdsD3JrySgJbG5ASsk1mvJUnaLG1YhKamC3bryLakK",
  "key5": "2Yce4gFV8k3egyUjLjPpYn5run19ZeFLuuDunXc8kmLKoYi5i3xvgqwGNgm8djysCuzRefq6bqC3ECartcY7vvtS",
  "key6": "3nhm27U1PDtwXAtmCe16XkQMErfB1ui68FrgpJFCtVttyLEwRjVjqM2DSg1abqTdLeE9QKCucFrdaFv4gW7wKhP4",
  "key7": "2yaBduAZR1bgJoKVmXtuHzVX7wYmHPaYP7ZUXLrFx1DSVZY6ZENUf9CayfBWiVzr7VkMbS914exQvdXVpyt4ZbKS",
  "key8": "ajXcsNT53xStQheoqvEAEKo3rTqTbMf33HFyTNCyVVhf4UXPenzyQ2z1BUa98fiuGQfcyJ2cXwM5Vh9wijiPXL6",
  "key9": "2dSKmSAd6CDNZJ9Aw873Kz3CPanxQ4sQgFNd9k4h5v9wXDz4C7MALTMH8RM5K6nKGCjD488rWgmavRK3i7mZLq6J",
  "key10": "CA5fxT5DEXkvovg64j7D8io4DWq4D8S9UquNPXCxEmyxE4T2E6KGFyxQ53Srt8XfoXvCe4aXrkjPkFVnqLticka",
  "key11": "3ETwYHrSANYHPdkz1XKotUQDMbELPtpa91UdzSFBdoDbwC2K6AK1odzPv4UrLs23uH5utzY5KRhEk4DJRPpNzn4a",
  "key12": "4V34qnbpAi56coLrJaXgL3LtM8azpRPps7WPKR73UEueSQ87dqiSsu9zW51AzHhFqn3T4sZ2MWMsh13CxgpyYgfg",
  "key13": "5vFC1rsXxrpL3DHD2YXsMdr58YKtCd3GjCC3Ch7SjoNKo8AqtG13adPpTotN4wiarc65iuqoR6FtAUGQqiHzgTEH",
  "key14": "5HWk4iSzUAaufrjuCGzSxqpxbor6F6GePsyCPhsXJbfuZ5mfDfSCgY7MkZHsRiyLSQbGhkGCjFNJVrVPGsGHTf6t",
  "key15": "3SYu5afSE6Wrz8N1V7Nfed62w5iR85WQ3odM9p1owwxLYXKTTFujPkB564eCmPr9RKcboC2CJ4Nu7UyQMhs1gLSa",
  "key16": "5KHUrwER9oZq2bWK1T3Zwq46gn2ddq3xsNgwx1Xkuqc5S1SkTx8tyfyafJ9hf8PP4qhUHJ7TJnKhr2qLV5oisho4",
  "key17": "3t7rKZ1GERFSyxdsmdMeDoCy5bcTae7msDoPKNhSNcyeCChqGtBXbFdL97LAibsDqjygRV2Y7ae6UzegbLSjZRBw",
  "key18": "fAMcTocWFA4bG4qgY8sndQBSRrf9UJcDARKQYWthe8Rh9RSsqktZorPjJigBdaCPvYde5TkeoMZ8cVdWQ6vaYZP",
  "key19": "Y52PpfjRkJXZMse7jKacKDcWtNYdpXjkn1ELzqR3pv4toeYQ96N7S3bwVuE9jRdzCKLpiN41SSBGyAgrgSuM24b",
  "key20": "3V44jTFtdmbNF9JHKt5zNW9riCFTUoD9Ru5Y1kAuUVDMai6Nhuv8ZqLD4amcep2xmbaAJNEZn78ev3k9PrD5wvkr",
  "key21": "6ZHFeUsSXYtnTUYSgc1LQZ27jvdWRb7dVPFxVPEy5VFeZ5vuDRCrpvdgu1jcMCRavp5shdzJ2y6nz68euSRfE8h",
  "key22": "Mh3xKUBwZVi7LNShNm8ayE2XZvWiBfv1RXA39xYPcaAP7H4kzz1xneB3K8QthFBVqHbt5fYpCVxCFsKGiGgquBG",
  "key23": "65AoV7WJhA8dTHCCbrWkEvWudBUu1HDe86kq1H3NMvsgYGMroTVdp3RWxkyPbFZuqQkma2ZHsXjyKLqwyQVLwuPv",
  "key24": "2BJQUErZf333ASp8VUkwgbr7B2ujB2GDDVkLBtYN5UMis3nFrhLGqjnGNJybG7tT3bpymQykUxX5J1vsmQ3YGAPE",
  "key25": "4yy6nsxDzpfivpF5hzmT5rymW86FsgJNcvRoVqr3eqxMovW1TC3MxW8zC9Se69BxSfSHoXS7EGJk7ymkAnBMfLM9"
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
