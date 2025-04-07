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
    "2vkeo2tv2iUXLgda6C61XW6sLTEwhFx5kKpGshGj3s1cabMpYsGE3Ea8PWJQXyaUFWb4CqBLLU6cbigZNeRmnh3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mtz9GbBZZnnQURyPVFDN69SgetXQE8igf6GPtfKK1erv3HmpKDF7jtm78PYYtEPC8asxW5Ni2nrf3YqpRgHnczT",
  "key1": "51ikwjUP7WnhWJjzdVbY6Jb5vy8Rw62a9RThhi8AfuuQEh4Jxb7AgCoJjVcERZjms2eiw5AY1CmvSSbMQj8PKL7H",
  "key2": "4gJizuWSTtPtSXU8uhqWeCMgvg7rKkR2Jb3PsTWeShTSmJEZGrFSexkXvgxWVtqT3bPaNYp63wmAtuZrjBLifdDY",
  "key3": "2VYTytGBdjsf9nyS8rWMtzCJSk2cZ7qjT9GiCrXaKo7PyQi1srcRy7h4joHTGLjnpgF3sRN61cV3v7LPPBNCvWCh",
  "key4": "pZLB4qVh3csBQX5M3NqfN3y5ANRcqRNzKByfvgbzQnvabgk1bAMpgUX3N91mCTxHSLq5qiuZx8z21CAK3jPtn7a",
  "key5": "2zQAaVZcWW7fqNhNXJZfNudZ9KsK1gmJZaAEs7PN6PWQGvVNaMXnfn5YTjSJA95uPTP87BHbVd5Hir2B2t4hgRfq",
  "key6": "4wBGvGCEmXKjhGSwfDdeuGGhtoqwi7WvxGpyMxExQkMcRCC65kACHvfKKNogRyvKuUMou2iYQVKEZ5oxtiidUtYX",
  "key7": "5wMETsKhhUU3H5joNeqVRqJDAEnCN2cMSU7KRYmFRQHBv1PJbDMLYNifqbR1Gjy6DoEWxj6VHr3udoWVpUVV7PnM",
  "key8": "4sdsVaD9ayKR15rT6F6qK7TBh1WK5YSaeDfohgqpEJV6Qi72iF4ChSAjyGhUWsbPNwSFxTwKWjvS2jSgzjzXcHit",
  "key9": "2fwEqKKZYYkP2rzRXABwg11rS4BkFUhe66jY2cp62g2sJehW1QhF9vKiU9FFMRJGkze98SWtyRQATKQHMyCwr2H",
  "key10": "rnrN6uLKCrB81dqs4gcKD5k3GJp4q4mArakt4e7UzbfRhogGM3e9iGgtfYZcJA79V2fD73ZBPBjuBcrsNEJPV37",
  "key11": "51d7r7L7hRZeEb37gjX66haGrqMrX3gLvBNR9TLVjvYUTybZkJZ5HFKUMLktAopETmNFSzcQY8EpNErv1An9Cvn1",
  "key12": "2cfgiR9inMBLGEAyCusQqqpm2Z7xyuYbRjyT3EzQQkjPKwZYXi5ke2bNteU4RdVt6tz3rNPoFYKqLe2894KwMjFW",
  "key13": "ChecUWNFqTJjXdYNnHNBaV5DMZnGhmUZGkHg6pcCcZkwWt2XPk34siDgWK8pQvEkMHRij39Kq8uv3kh6ECXEgBr",
  "key14": "4skQBnjBDGNAtnhRFe7FgSzzYGnakDM6Hpz8AXrmM5eK2KssQvuan1aSRWRoTtoxgwqiEDzts8nG8oQj4iGsFqPN",
  "key15": "4NaFgrZ78F51fhzBMVbqTuwuWJUGVFXtYegR9XyUexpbopEF3YNeYyQYq7snSD7iQgcQrQwhCoMGcDM1PzzEPa2c",
  "key16": "5bQHJZtw4zJ7twCAaapozsh4wYSkjzocdvhFGXW1JnsofdnopeQRhbPduHvkWWSLLop63iHGJrzzoCzpLVL85aED",
  "key17": "2wQ7aTvF3AYeTXSMDYtZ6e9dqQATxYnYNQcipXn1r2iTqrra1JCQgZ4urJoPw8Lw2Q7vZAxzZoAuBKaN7LFrbGo2",
  "key18": "569AidbUXUiwPvaYPYJsUUexhJ7NsghPLzcKMeYenYERzbWoBeww81pSdyMARq5FHn5MTNy1Lhsfp9JH2EVrxVNB",
  "key19": "46SmMzDHuuA3LRJwjMU2N4vHZXytFLihWBgmWKZ3Vron26UdJZwy9S679DgGCfsAfccHkSXHdtKKAHPS4iV2aTHy",
  "key20": "3S4ayNZfSSycJjMAVbCKruDQ5sXviQacxzUcdsB176N6DSiBzkVL5tvpiz1KpXVgcFPSBv5NeYwd1a6AY8bubcT5",
  "key21": "5RzikdMfsn1xFYUfszR9hD2Hed6JyKxbL7j46nBZpYECRS2oYGCdLgyLEsM11v3ZSyBqP6KrT7S4PHEXcEMkTsSL",
  "key22": "3kKJhtujveKyUzhGxfPWGemasdD8NCS5Gthi8ovy5L7R1sJox1LZGMmzGSnK8wWpEp918TbtRFFBDym37pn8qyPV",
  "key23": "5RcN1dEhuaPKCpTGRNBiJoCMd3uT1xuVLXNxNTSAyAEXsJCGR5sHKY8TjS9kmXF5ydRdM1AsRPbGzuuYtPgdK43V",
  "key24": "5SznaptGhoUubnvgqKiAonULTVPktXqHHDNUZnvQDVJhGtFoeKrhEiB1s2QJAdKV2sRb3K98zqEeDUYGqNgw1g6b",
  "key25": "3Rc1tKrMzWYEDNhUCWsc123csnuA3oapFDANhp1fN97Ba8FFDsveja4hVDhRYk6cAnrpDL8ABVBeq7eWgH3r5JgE"
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
