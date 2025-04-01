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
    "35WDeTopRoNPUfh3SYSdiCtr14pAymh41nHdrjJDz1J4Z4BVeXzZzp9QMFQh8zKDhqYecFHZt1yYNCiS3dCVrHye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SeWW6taaqMcMeZGNiGtnDiGFxLeZAow5SJztB16dtiHQekjCzNEKEXdcyATSGQAYcNsF7YfSc97PfGet8AtUgVV",
  "key1": "5aYmFyP2U9svnBcDwcMRmcVucEP9shPFsjZV3g7b5s74YimtXX9NmjgzRo4y8feAPaavG4sjhLVxKBQH1f5pTdmb",
  "key2": "2TMjgxNreEvQNZSRDeAzp8Ha6Mhq5vUMQ1mFXh3K7CLr4QENBZyAdS6Z557Q6jdcfLMKnq11rqQyDURuNrFqCZE8",
  "key3": "3HnpZLTGqvYyG88BEiJLe2c8HMFXL9wz7G7eQhkVpteFwoad6gMacoFLYyjQbkAJfSAZgZaRLytoyD89fnUjpng1",
  "key4": "2n9UfAAWkxNpLhp2fVogpH5WYgLCxkbYgimNG5ERdgBhGBajG79EdH1gXhuoiCcmcMXM9q3JcrEvukSeXV1cBdPY",
  "key5": "4XKGvi6hetLekSmajjqb2dty1xRgFVSFTVCi2MqYd3Yq8PnCu6ySh7vVd5M3jWssLVbUod8NEsEcs5NXLhAbFgU5",
  "key6": "THwkKCkhFaNuG5UZSDwQ4Hux4mTrJtoTQqKWVP2xpRL5LcMxVgkS4rG9EhAmKkkTStW97wNvjAqpAZWj6FMUkCh",
  "key7": "4NDXekvCXVrogefpGctDWFWq98FuhWySKVaqWUzfkQgJTK9Ey1nJWRDH8zwSe6W3x6GQVHD2BZaX93YHt6xK5hep",
  "key8": "25gbit8pLiVMtq4Z8HzLmp2wSABd38RZX6vYt8rpgEm811QeTgxVwuYvZSRJgUFJBHyFBe3jbP3puso3asakKhkM",
  "key9": "5JK3z5UCuoA1duiFBitmUCeiXFnMLNqtJt4hpMFuXeFAhx9fkrc7oNuQCJiRq9jtwmxkzxVSc1tEy9tk6EqiqBgz",
  "key10": "2bDkeMQTXGgoKzZZimTrjEr6QNhDcPEw6Fb2pcyodNQwpTW4pmg4UGzJu4K9BvTeTqTazgFqs1XbjoWKmPfcGvJE",
  "key11": "4wUF5DFgsSudG7mnrJmj8K6NavFKbNPX46JfhVp3QK1X9urFvKuPTT38MNaGhCJooRhMrtxPV8e8KQEhWYVVWLv9",
  "key12": "5GDmjVQjfLPG51tFZFznkGdzY48qbGrNguSUv44UjrHg7jeVkmjJ2LjAX1PUwRzFaBhkBMbEZcK94o3nkT4Tf1BU",
  "key13": "5sosUqAzJ8XhbGGzZhuKtSYhvu6Ubr9sctbCXY368u8q5dAcd2cuktw9TMgd3qrUyse9C62niGtkQw8eBeHng6wQ",
  "key14": "4EviSiCM1pBTMq142L8SqBueizj4BhFVfuGD7x3WMjj6b8H8TkiGkUDPsBhyvqskYd7E8XvWAD4hJqfNAunymm1N",
  "key15": "2VA44soao5N3VgmKVbFTJzcJFrNwyoDH86qfVu4g7RT3yZJZ64brSEv2CkacbUWGGJZ6LGi7pmZ8PP4ARvBbaXJ5",
  "key16": "2Dy8hqTrAeBPicsa81ci4kiP9b4arL9VNRmMdw5KhAns4276yYeMTQ3keZ7CKvJ5NsT3EkjyUs6YkaYHgubW6WYK",
  "key17": "4n42ujU4gvvYastXfgTgHRqFLdS9F4WXP6zXi3d3JvmmoZ7vXsaK5wEDkwZQ7goU6pqFLar5ZqmUCFKCByWJgyzP",
  "key18": "VEyaHb2vAPyhVMUFVvNCXSDupBoGn4Sca5kjxi6GMtFsPsGwn7KMG3NZwmFPsnLLrTDrM2eD3JkcmSjpE2nan8B",
  "key19": "3u8NXgdkBdANKHZniHML8gWRYj9D8G5ibnkt5nVnno7fYRyQ7Jp7vfUphhpCVR5yZwRG971msZaSiAgsSvETUP8U",
  "key20": "2cFDYD2EEHL73NeT16VEWXxgaFoCtypKkFWpbkRh9TUBrvi2Ck2juhPowc3EomdgyFih1Js9PPjUzVHDLknAAwar",
  "key21": "244gYfq8yY9F3iLB64x4eyQkZKHKEXkzftW7C1kkfqvFrSj6fatTG5vawJq8M25cezA6F8Hi2tcXePo5gNcXxQ9e",
  "key22": "4a2Tbnb8prQ5oHhWenP4LWidwbnVUJ4n8pLCBqGjn1MoHV8LXRJX5GHsnKrY3XcvhBbjduLyoH9FQbEPMP5RQsBK",
  "key23": "3xx5b8sEj5qppfj364uFvWXbGcmN1qPkDTocprYikaoV5NH4Jyy2tNc8qUgxKYChprsVVP12SVLQbBt2isT4ehBG",
  "key24": "pQn6W8iyWcVFnop72d6VSrCKtN8z3LycUNz74Hiu37BFhsNVNagRR3XxFqMsVPGNvo4wTYEGgvDc8J1AgPdVeCj",
  "key25": "3P4NZxqQ929nB3BMca8aFeQioR7t2xebhtxzYrjxsNVUVmneaDeowa1VPyAMDQywiwk7L18tKXrXi7FKafPCkRbi",
  "key26": "VtDxMwGsC55MZtUfSUVwH6DcVez616y1fZi5hZ1DYdjxVNybeNQrz2yQhGaiWpNxv3RVUFCnBDoE65MsdEBquY1",
  "key27": "4bZftrk818NE6mcRrbWWTCLFAMt6UfwoMbbS2WHv895BFpzxMJtDsft7hfk2GxHwwnFsjyNPQky3GQt4h25HeLZS",
  "key28": "4QAJxnVb3KemQTPx5UbusWFw8ooE4tAa4ZBEv7ytrM3R5GLmZj6hF8uHyWjmLuNWVYSJSRbMTNu9qeh3s472uNqt",
  "key29": "3yxmCgSaM2T8TddG7dRzQWLJQyq5qXrKdfPRwvfvfbAGHSvVNcLJP4CwgVNvVn34eSCtD1grs8Apn9N5meqHBfwu",
  "key30": "2yFa2xrjzWsNxTvqny6fteGfCLztpMabsZ3HTtEUny9AVFBPWV3QoCx1oJoV4zsUdKSp1anMiarwn8CLWLAGyWyh"
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
