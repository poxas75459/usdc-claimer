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
    "5NTpKTHyRWEeiA7mZUfr1XiiW8iopbEVu1VVsfojSgoDHv4q9MybMpSLnJjzCUey4tnFTbAWckx4LmoYBzm8k8Q9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oDqVynbUCmhysb7xqc65srA3JLh3ynyHo2rjZofBrah8TpBEMgDfg7JzzF4cZ9KmXJBUK8kLB7dYxZio5NXJivc",
  "key1": "4J6jpkxkmRyUkcYrwpqKmn6QrpYqFr8xF7WFKrvuz7Rf8iEsYhEkrqHkA4KDtKy77NqveXGc9KHYxtAyn43jwbh7",
  "key2": "282AxufiSVdckoXRzQ1xa2iTVgTTyyZfe8cNT1gknTTU2NEe3ri13rf55rFe51mjaGiV3bTSh57oWQhyYGLVFUpd",
  "key3": "5Z4zwD4Hq17zGw4SerJvk9fuiaQVo9uFuQhWbrzgeSAm5yceibuUBzr99GJsenSMP4cZhvDZmDCyBAiJrn7TeB4s",
  "key4": "4JvmPdamDd19MjTkhMWH9WhhuXNzugCApEYcYRxBsMk5Bms6cEG8WoJKhkNktbYvjVBghAFggW9hMKMvAVLketCp",
  "key5": "3fSNHnEge2S2Cg7ojNt9aNqU8RmFwdcFWgNLTG1VWfm95t6JReJGJhE2TzQsi9Bp9ugTrM74yW5YxgvhXdoGULPA",
  "key6": "FWpGxNCY5Njtn9GYpKLMUAyjHm9XcQRwRam94pyd7C6JdKxJ941eCY375dZcdNgHCZLwqEC58sTzgPF7fF4Npsw",
  "key7": "4HkcwMjwjxCDEdJkayLk6uto3GiNHjwS7PiGAEcGoZFWgjUd7Ayf9kEWyrvQ1V5xhkK58wmwr6UVmeG3A1bGQ4w1",
  "key8": "5267KQo6TByFxGgsMcBoCKY6QSHRYy7DW1iMi1aNnVeLdq2Gutbcdby29A3ioaw8X5pTQ1yDZ6nkPW2jnNxfUYEg",
  "key9": "2oyH45qxCAotgyV6eHQnZzuwCXHWuDTLw48xG6mHXHLBjw2Z6zJdSj8FpXk1FJXD9W1qhQw1yWMu24mPVj2Cnkko",
  "key10": "S89nmxzt7gGoBAvXmSxnJQwcRp8jDpi1tcrGteB5HbeZQaCMxuhnYXRCFV5FZJJneBZJhzFCNCZTuJeCydjrjcX",
  "key11": "4ApxEBpUVM4oWv4amvVw94n1pGC7S8FR5wtEzFdEqyRM9VpJyGnTwoS2e85DTTtUTbJY2cFrovaScRPooX3oSeTv",
  "key12": "3iN6BnDVYexf2syGXKzv62xZAoxsRGpqbUijY7B1mDqMH8tH2NbxdDNFFWdTcynibZQssGjCDx8G9KUC2twsYtnU",
  "key13": "4d8gvv6cTYPYd5Hzi53MiiqcDoNuQjNEAByXPXiugju3UV6CJnzouP8uUadYNRTemhRhLboym7zPRgj7hFVyxyB9",
  "key14": "Z29ScSiTVKZ69s3qL3zHY9vPf58k2NbLYRdkFmjUxrgi4nLzafUtk8uEFyJbfvNKbHcuYaj8Pd9mdnU1uf4Twhx",
  "key15": "5xu3rLNnsVYmxnvbzdng1CmC6L5zyavnwHow3FW8UbWwzrdWMQrP2wCBiMrm93yqkkub2nsPFiEBhBeP3yed3Asw",
  "key16": "2EQg1FkRMnP7ZCGFCmRDCPHwFTa5HUUiHp5C47UUDphGA2BXQDFWbugbRetMeyqRWRcHktXosaciVPMaASdG9XWA",
  "key17": "48kKvj5bLX2WNBQf7pFn2WJxNjVPWtP8AzPetCaQcVTdcaLCi75XMUKiNMNZMAzC9HgZy8YuFXry2r4XEisf4RtL",
  "key18": "dpvzLSoLasxNFU3mtRgVfka5koZMEopsrAW8Fo8Ng8SD2CNbyGEnuNZvzjmaxT3QhDnAqTXRt8SaCLeqzdZ2FJT",
  "key19": "3WXUUS62u5U1JvVyWuQYd26oEWU3ZYhzregWYW8FjgjYx3km2cdBvX3AeWKfP1zytNySUWrDHJurUgdK5JPzUSEr",
  "key20": "DPCe42se7dGS65YyR3GcRXzfukuNQzTc6TqJsJD4VLWMN999eJpL7DAvKuP8oQHV4iuhykqJhqg6h1cNygoFavA",
  "key21": "3jfUPPNHyWeAqbFvmxEheBraU2oqvtd1tHdKFKSLuNyEMrPHumLPv2LJZ5HvdT9DJCHZGB19WtNMwzJRnsWG1jEt",
  "key22": "2tKfNGWZ5Pbq7vRDSW4abSzChb5rg8dR1acwVemSvkBR3uPbEuHfD4jrAM58KDTXtnL9pvPanEgVFb9gYy8sJtv5",
  "key23": "o7gFvTdwzMuWKZ9n5XD4cTjLrXsWPokxHvo9cH89NgjdBd6Zt88HdvrKjbeFTWeJKKzppmrYrrGNHjk7KRk3mAh",
  "key24": "2uEUsT85pnb6LWwUeUF2CMAGm7c17zXEh3b1BMXxf8B467rVKLkGBTCd9XYFDJjmPZSegAD9MSqQch9GkhojM44",
  "key25": "5ayfE27hfSHLeoWfjx5BHJrscfBJUX793MsjGkdTScyAFgZnSMVN8FBKEh64joFmgGDMSdtHSTcu1FSJMd15Lt8W",
  "key26": "5GMu2mmrqTrWfc9tan257rSZxeGBnWDYumKuw4Rd6GBiTwS7VnsXyaas9Mnzr1s58yG2AFgqX9dEnDMM1yx2GaKN",
  "key27": "ycprcDq2QEK1ThUFsycUfrXnh9Rnas5MtxvRLEi7WjMeKZTd2k1iuCJwxRGAwJA5NaEbzfGYvqxvvgZd979uNb4",
  "key28": "bzcdu4PXaDaB1qbp38CVmcbbL1475yt9Nzpxkmwme3RtaZFF4nutieuvctSTsRDWwiVjqEM5eHiCRL3P7jHuy3w"
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
