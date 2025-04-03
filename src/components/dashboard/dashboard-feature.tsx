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
    "4LZ9KAPz35dAbMQqsvAF8BeVzZsdzdqYKeddvZbftvhuAHLLq11sVED1ZsTRBriBpwh66vgitU5d1VYkwiD8hoDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "263pFxmzAzFGDdaExvjH3bjzkRozF5R1DggnSA5tsc5nT276Cg9ayNss7SmbhLQTY813y16VJ1nuvSxE9roCGpqu",
  "key1": "5FhJXW3LdpexxnytuJfVAuhmtoM3JyE4djtMc9TxGv7ChG1Q4dKuXSvMtRkMq8D5dFr4Vm2HvP9czjepeedQUyZn",
  "key2": "s6kDGGhg1yDvDQnKfvwrDntmfhivQoz9m6HEbAGZ3sK6SCygx5bD22o2taj8XwrRqqwLpTMtH5K9CdF1DpZu6NW",
  "key3": "2SkecFX1R3PJy5Y35WVZU7HbgJmEZyY9wQeBd9fN3sho4GwGwfSeEzxjBD3DEjNG7Eg5mkCcHPtgzHtCnnj1fvW2",
  "key4": "5GsMnTvZH5RUjAcZ9Ah5zgMM3emosTDwcSSxW24o2AJivC6rt2qT4WS3Ut6RR8zzjcki5rNbKAbB5BqmkGxtwX1Y",
  "key5": "3AA9Q5A7qGGQvZbEiuKaKKmEgcEFHz1yfCxiamrs1FSv7V5CnXFmENAuFMdFiwz1DnTf9nVqDZkBUdz3VHszXDoq",
  "key6": "4uRzfAAkASLdPxsfWq8tA4cqzDykf3CB4t1R3Fb6PAxeYY2xYZzJ8YQEFU5yiye4TV6CPGgybGR4ZUeP5GJ5MnM",
  "key7": "3eEgqz8Bp6CnuKQWsZsHgVA3XZ3RPhfNpAATWCkVKa8Q4CuXDaCbg7CMxe5ChwxKWpPCZ7A8Sb35JdLFjMmiF412",
  "key8": "4iSMAmMdBsV2krxetzAFN5u2itcpBpD7trRnhute7dsUBLPzwvTKPmnMrkZtYi6RUu3uR5S4pKzwzDhVgSBRZZbd",
  "key9": "2Gi1P7ebpqvYzPh1tiiR25TVpBxXe3qSnH1mDDXBRKn64fpb3GPWHzuErxi9XybkdrUZoesQJMw8vqfJCLQhZbeP",
  "key10": "3jeyhvNosRVQkzATLR7XTD75DiAMWZKpxJ9PuALpEm84P4py5j9gkfwSnUoc3ufMpibRimeFY4d1AFAMNbuPATvF",
  "key11": "5Hvncntxmp12QPnqHCDSm8hUsqePAQutLfCYdjayq2jaUAgbz2zTm3s29TDzbS6zR6627pNLLGWkkFev4CFJyGFT",
  "key12": "kHjDgSrMoDfmKY6hdQdmbsR5SwD51ZqC2L8R82nvxrEoS3DpSzTkkiFrYSwCqxwDDRDncrFGu7z4z23m6aiptRx",
  "key13": "4tCDXuiFTh1uRaXBtvcshQXtQJ9WfQptj2P8t6YoWaY4ZTMZ2hvYJpNkHuN1hMvDsSYgPeWcpqiD5hJfEL6REUJq",
  "key14": "3hZiTqrKQMGQ2fE6WA2CvhEeEHjVyebphuQGYtNw1RrPsZwYQijuF82gXrHnUTUwKxWZDKgEF5fQVsoYWcdcLggn",
  "key15": "WhgtkbV37o8uzvBGoBxoW9Ficwqfms55yJm13XpRWHz7zZ7583QY1g7WjkYTFt3DYQHX2MRGWZQjuXYokMAKtYt",
  "key16": "5xqNv37apBLaa4YRg1W2hxA4Bqa1Q2jvGZachX81RqUxSeoomzd52jLwErwe37we3rk4S7WLB4eTkGrg8HC5bBPK",
  "key17": "4K93am9hnFucxmKjaqLkxYGRi3vhTSQYg4snmNcXCLTe3hAzpyzC2Cx1nz82Ccee7Z9Gb2dKfU6uS58vujYDpFQn",
  "key18": "FU3DJjgC2qwhebXMhLfxkQAXrSsKYuWQ1Tq5RvbUZMypTBdsEUWVM3ppdK282beM7maxPBbsUtDo2EvEJKK9T6M",
  "key19": "GuobqoYDz5sc7kp3t4zzBx9mGMrY5vft1tSHDsDshtgFrhCFzjFumUrSVxrG6pm7mHvYETBA9hEYYrXBzKTt8Wy",
  "key20": "vcz1ohfTPwXPiBsw6VNqevDoqevzxMLFcgtoCtSjbgNPcvcv1wxtaYhuMkhtYqEysvhz3uNkd9f4MaEZ1f1R59E",
  "key21": "53A57zoE7TG8Qwujhbq85rs5pp7mY76ATqS1ei35dApi4ny96xnRA3Vf2ZAZvd7cv6VgAKpD7Vbb3JrtQqfEN4oj",
  "key22": "62EYXpKGTHwu4GsGfbNG6g7PkUqRCdfETVZ2RaXbakQjLbK11YthXp6PiBoYfy4VnyTjmfnZh6WdoaxMV4L1fU8q",
  "key23": "3waPx9gxUs82aTotKH9wEUk8SSwY2kwihJwPsDd1WxmkiC12NdgqQzSobBNuYRwSMTj6DJCSbKXqhmxzwLX3pxTZ",
  "key24": "GgNnjExEFZCDEWSXdBSUWrn5FY5B9jUko63oSAKT8nyM3ekFrzVVAzeAGR3N1mrLmyMqJSHuuf4bDvPMcnYpro2",
  "key25": "5sLUJAFLUpjmXX9HVD4TFvbFARwRWwFu9T94hXXPiCbNFzoGbj2khsGN6rTTAQeyCx2LduaM4FccvTGLwvfBTgya",
  "key26": "5KS8Lsw6bS9X4axZCwWVG5J3fMq81jcrQC2K5VcDxxn31gbqNqnCTUfCkZrHkiFDTkHacAxmzpFxCjaAYaZNJwRh",
  "key27": "4kCjbyMWhEdabXxC2kE5GR9B8MMyv7cvZsxBxNLcz2a8BQ1gyVfzAoN7zHihnR6EbbMxA8c4V2kZXZduTn1Fdznr",
  "key28": "5eBYTLXP3M9UwQnVch2Ksp2ikAnbEzjmMXEM21DAvg98KJSsCLTXaMndrPmdY36pobG6akYGGtmzdyZ1n5eG36YA"
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
