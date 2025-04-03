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
    "4GgDP5ACqmVQFr7xJNjQoTxk7GkA6KDex2S84qL74GQsfakoHRFDCq4Mnsov5YVxg6oYng3fQsrgw9VKgtkVJfgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XLQkF7ETZrDAg7m1w4Ug74gSugYEZQTjny9ysyLEidhNSBpwARUvXMLQfDbKk59MPdvnp5KLCDyzWDcZ6HWw8mJ",
  "key1": "5J6nMyjhtyNCVR87fNScLrVoAyPZGKp4adGx2b3iSneJPLuvkk4qJkPj3jhvVWpMZf8vmMxey1r85AbqBGZb5nfn",
  "key2": "5khS8ZQeN82rTAuzW7ckXRdCmPYVkKs8d6HtMwqUMZnGQiFTmRM2QNiUAVtoPEFqJZiQkhDS1WPnx8zr3WWdB5ff",
  "key3": "2Y3dEMdNFDrcpv2BH2eF6bgcv4saFSq8jykxyoown7CuKH9mS7dySWKV2rtqEtA1FKqwktcm2sFxQsdezfGoghpi",
  "key4": "5mLVoKW7k5k4eAcoamvF69uDRvxojCibhUexaD9hVUtRQWsMKNQZqVmhkin1hTAetBTm5GpvbrS7ifqed89LFQ1Q",
  "key5": "5enJkHxWxiyMjXwvMBycYLDBrwdAXqebued7emZbDxvndJaWhUGLmKPCN4uK8AA8g7kMAnM1sWJEBXGQJQpKSNbV",
  "key6": "56gwsK11dzsSEpNRUuG7iQiR5sxmq3v9moxCdhnwzywCrTdDpWFVdox7hjgxpJASDK5U7iUvveDrqfo8bwZ5UFzi",
  "key7": "45qqm8TSFErhLDiMzupAyvvjkPYUAUanYaQnMzLRGqB46mbcCT4D9wBCvNQ6RvrgBgdzBj1ndtdUhkrEPdxjM45M",
  "key8": "4ApFW2boh4AffppeNREgZApfHkDHCwyfyL1MtwYUK2Ge56U2z9yMQZNkTLpbYRPwqB4XWRqSc7bXhpU31EDAmVqP",
  "key9": "2oWyMvzG8KXe4wfkv7ZhDoDGNwp1Gvsd13hts6cfeD9J5L8HGPn86VcKWRfGnktmURHJV5iNcesX6SSaFjYDFGDU",
  "key10": "2CaMfcnQTKySkLCVJppXDvBgMuhhw8ac6YgTM1oXWsrMciHPQ9N7GnzhjRuGuVJkt54eVqoHNpubY3VAN25mkkHu",
  "key11": "29L1hbtpbAPu71AcMssrZpnUgmFK8TyofrgMfSbu5hjDjcorTRRpLRvaFSRwwqmBXWvYYJ3Kfk5jzZMSYS9GRxQi",
  "key12": "5NajSEoQEGzsyqEv3s2FhzTou4NHVmEKk7UGTGvo4rdgKUD5iJL8GW6rgTvBGqZHX4VUJbjifvFnM8wbWeQYieXP",
  "key13": "2dg3A7bsS2B6BLKE1rrEY82Cqyf6DFk1Dq8wWDB8acJagqV9HxbAhmJMBFeC1woL5ftX1w5R47APVndCGyi47kPU",
  "key14": "5hvMHSQuLuEo5PGzLTESwUSSAtNGu5QvY8rcN4mbSFBzzLiwZnKZJLbfukEGmB7khN3CR1pDKw5dQeYtriNvi9Cp",
  "key15": "5R2DcB5WoQFLWznwt8a1jP1AvHnuGs94gjCA756BJ5GofLWDrVw3VN6bBBo3KrHfnynn1a9pskq9sKuEHTvpJ7dJ",
  "key16": "5MHTYzfLY44vrtk8BuF23S3nvS6R7g5FmLiU16q9pqfiUVkE6qgCzyXPeP5CuEhR5SJfe3oNRHukJq3WdpxAjMUH",
  "key17": "YCxDN6njsQsQQtWF4NFx6N6CC8CQSpnvxoiNj9idzxMT43vZr5B38QzQb8ZunsDxdGxUb1ZfNTpshjvgVNgnNVY",
  "key18": "5UgdYQjgNkKobcnmnwHGXYKreY76tuysWotDoiW5ZyHw597kuRpWrGhcr3ttQaUi6xXS95bBSTJ7FkL3rr3ac7iw",
  "key19": "2fbpvCaQyz4enWv94yF7LNrpnTbymU7fDhKpJKaHajYUb21rAoWTaiSntbgap61de3cBiftNPMN6UTqFVuwcHE7K",
  "key20": "8zDdtKo38496zBtkWyLdxwWATxdDK4DGoHenMpEofDStoGkfQZ8Bsxsc18GTHqZnEXizsxM1HGN3FD6Hmru9sC1",
  "key21": "39B592yajUEWqvUwyov8BZdaJCXSvPXa1s2stY2t6QexdbAzDvnVfsmx4zK6bXyfJuC4ncbYB7PuLFUfiLckMaeu",
  "key22": "32cqBb9yMmn5KHDH5t3gy5yEgkCvYSs6KMwUGogp7o23hRJJdstL1GhUJXjbA3Cxm7e51Ex7Y3YXbpoMA5HNpu1m",
  "key23": "vz26r2fFxawUeF6sXAQMuEakDUCnyvqfLWbBGjaQHNEnapXugP1TbYVtkbpFKLyKgzfKwnpefMoWjLEAZAxm9JK",
  "key24": "2FzSZubqmP1ipcWBaDMxfpQ1aLLdSp4pNzCr6HWFpFgQzUNanQvXcZ9kpoBDUpHbQ69gsyLw1bkefsM4u4bP5RSx",
  "key25": "4nk5VUoFrGMr8rmj7D3vheGKBDtnttpBJwHXaqLqxHPkamYXSeAg8oEGHzutchMrqaEjrmzvJ87A8BJGLraeMaXH",
  "key26": "59SNZk8piNmSGg9Ev37nAaqmQuTLNYibzZqJdmt6dpDvBUZpf65vpmXRKjEYDExsb47efX2TK5z7xUTmv2Tr81gg",
  "key27": "wmiikjSjpXo4uhbiM9SayVuR4huSM1THA2zkveg6U6xtCFpcKdi64DfURyesyGrzVmorJzBtFCXBqqzFntb8v4d",
  "key28": "bVN9JKTYnJw5Cvbwt7zt46pcCRpCf3hN9U2FhdDXUyWQDMydgTYneJ2KZxsohLbu2fKpL2Bg1HFsefp4fbggCyB",
  "key29": "4pyzjkku2YcQ7J1A3cpxjdx9Hv33htgfMaG1qqLLEPDVUDN6CyTzdjtxKB7w5NMDn8zkbaSVG3xFucZ571X5Jece",
  "key30": "4U3KDC8K23pfAgnqhzE4pvkFRZ5uDSvLbVh1XLSNfBZdKJ1F6XAPR6mUQ9ypkStEpYwuJviod8nCZyW4i3BGYA6v",
  "key31": "o6BGM7pVV9A5gjcmgoBQhY61MnEiMszA91wj6k1tRiXpvVLSEdxbH8oXB2k2pmsMnCPhwx2xeprzaMofMnmnP8M",
  "key32": "5zqQoQyU5u5MS9K3K83VvgikspRxRKKCDrcecyrVojVk8UCgNbHxZV45PwxmDJ393sFunPo3GH723pGpAvfY7t4p",
  "key33": "2t2oLYN6t8FMDK6oZfAQZKsj9M3o9n4QvBUFLRB8FR3DaKLVzgt4UWKoA6infjy2LbpHsvsLNqDER4g1nUBKP3Vh",
  "key34": "4UFwsYPiwoE3sPych88HDCpVrKCMSKN6G9BXgaxsMBs1StkHPb5dbeV9Vc5A27ZstorAjXz4iTAqjhKYcMNMPZaM",
  "key35": "44dtefhGwGYTnUZqZUbJVeSZYLrbRxKsKaJDRDfSb7VfLbbdTM7wGzmuXncXfr1NAoJdfB3eBbyenbDpnXFuA36D",
  "key36": "Qv8r2cZXgdKAwKi6qiHA2siXttTxeMNyKKmL1sRReMopY6MbpPDxi8NB8D72jToDMmvF7izcTQh22be6g2L7aA7",
  "key37": "wPPNMafooVx6hMyXrcNiE47QZhCyDjz4PyaxN6JHAKgNTDXgmaMBS5KWkQ6pXpT1bGb9fczC6qy48twvzmswsPp",
  "key38": "2Hmu2qpBhgWKpKksVLhFH25pRLiuvVbSgbEVmTRXwVrYCa5UpyUDLtSF6JoDXXvvMuSg4Z2z7emQK8NwWoBj5X65",
  "key39": "55zrFtoagdH963jWCri1ugWVtK8zbVKDWcAYMzrD7KPZA3HDNuxohX4wHZicpjACBg3uPv6iPpeSk43U4wzyfKJM",
  "key40": "y5iQ3mGZR4rTP4p6L5vxn9CSYqroFDqHfFsXUX1cciNHBU6hMjXg1g7mgdDkWh1QfXRrkMxWfZ49p8oDj7mnMXP",
  "key41": "2dmrzAx7iqKmL9jnc3kK7baDAN8vNxEyuYMLV4eLMeSSxaVp3RRcwLfc8HAGHbnSEp5E1RVAYfUuEhQSbiXn8PsR",
  "key42": "2tH7WwSJYWp4BH35Ly8A9uXHd1F8HCucZhQDnbHxtEF1XooESaqzSDEK658VLrUMeMoT23j4zb3ef1pQNhBrZUh5",
  "key43": "mXkpZSTUxa4aYspSdMbGomGofvhN1uu12Uve2tqisBZKCnMjGmgYFbd2M1FFPdszSnPaeAjhPrmHBDQezP21dT2",
  "key44": "52vwCWptApBm6J9ihjaHMytBeDmnVHxHPMK571TGZ8ygzNyngHHxjNwkh4zUG8HXtnMxooiWYBFqmn1CTcqUPiPn"
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
