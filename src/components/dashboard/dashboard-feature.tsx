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
    "2aMqWKXLrRsX5HoF7WvAJAWk2ojpS7PWQAcP1i55GHmw3VycdTEaPmnxy7LmezAya9M28QGRrfny1rkgbb2wAbpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ExH8wxZuMUYpdL8x4AZmm5oe3MytU1eUNkrniXwtwYFtcQwHMtwMEaUpycgn1JQCHpm3N7hxQJu2dhd6WMnHn7J",
  "key1": "BL5wjQag4RPfp9PN4xfku7LxqP6vpvSnoCc9hBqgVDjFGjaRMziimM4MzsCs29PCH8WpBRb2omDy6kBL126GeiZ",
  "key2": "5SjKq7z4VEDGVPwZMb3LciqBR4ihzDmnBincNtwRYd7nnjtdLLX2TLrX1DEtRtUef4rVQjpQ4KJsNsPQQrR2UGTV",
  "key3": "3mFL3iZ1XhfJmcBRVZtv371vQJMhPFgc6p6gRpVHGgpYSi9HdHo25ZPZTfKuZ1a2fVsxA7DfkXkswQzFvNFYj67A",
  "key4": "3V8ZLPTEuK8QgfENFDo1zsHF5swWvNizFhrahbaYR94q8dK6p87vsgzJ7pkqHQMgbKcspQ5EhpfyCJXbxDjjGDwd",
  "key5": "iPcNffhXHin65PTfsGPv7jSbFonC8dggnigDFXV53iBqn6WvJT2YMWs36KakQ4VxvXWc1Xdn5MNdSBYqaUS2QVm",
  "key6": "3V6s9sc2iQonZ3m1r54GCbTtEyLanvFmQrMAyjy1FxboC6PJ2RUThNEiBGnyv2n7rseJs4sLau4qJK1WEFNxcS6Y",
  "key7": "2dzG9pxEC1gge8MnxQM4iaZR7V4KY4DHZuEJbE85skMjpbmUnFofqsb15ZYuFvqvJzP1Z3MAT7STzTcmMMuCvBnE",
  "key8": "3d2EJnGAarMsZ2XUkJQVCs7gbcJd91s4Bizq1iNznVMRmeGQpndZyuUg5Hf9AAPLRcK7yJGHYMjn4mcwEuJeTXDT",
  "key9": "2NWd3pCsh9x8Up7bGkNgbt1783sqnareL7PCBjvzfPDyCgAUE8x3Qe66VkBY6ATPBMiDpm1YXRqjVC8Ei6XU8wt8",
  "key10": "3TQck2A6FzswNKXkEpmkVjNgYi4n9bWAbzKXZMEgg6vu2PicCX9zPq6x2QgGvPojCS8BvHXkkc7jVnmx5sebonDH",
  "key11": "3YMRR5bVCjAQ6cdQAx2soS9Z4BZ8mZCxA9JrzRrpyGBcrfn8jS5waqJ9nHV4f4ueBJmqKebvxJPk4VXpZPyyibpf",
  "key12": "2mtbzqEB7ixF478kZw8LXzTHMDUB1yHPACbWqDGNTJw43GiQQQ4Y8Z7Zm7Ze3Ndh6MCRRsUT6Kw3Bh73UFbNZQyF",
  "key13": "2yt5NKQCLyWW3KXkFQ8ozGcrEYEBogQge69H1tgMByuANzEnvC8jU2L51rLV4b1FgkvgzzGd8FtYrxsaWULDFqZ3",
  "key14": "hyobtutcCAFCaTcP4VxjLnmekxVYSymUrnS9QHYEMSpv7v5sMANnG9dJJkaxFtmWSJvq4kMCWtLEQHi3x3UtE9D",
  "key15": "3m4cd4gvTudbMoXiDMCU9De85RwZWYMbAHNX16Jps8oPAfrv9huKbSLCTYcpfDdi7gjCYMGzdCot5NQCWCff1bAU",
  "key16": "3c3Ecf9aQ1sBa8JGmhjvHFFZP4Vn8t4BqkiCMj2yBNoWXfjhUvByMswns6LUzEmqSJBXHFEB2Tsk3wWnTCK9FThw",
  "key17": "63o169fVyARaywUkqToZt877grzr1n2LQ1GfKCcSFQpkFw9NViPWJWFz5RstUDDBFYNkLhmmH29wAvjQQ74rMdDi",
  "key18": "675soJqfAGjw8PkB8mkLw9Ve2xTTNdjrdFtubuxVRL9WbbmrwqviWiKp2ZC12M3GqSNR19ibjWioGBnXogn7h2TM",
  "key19": "4Q2WzPmb7xioLQfLfE6UkbwmVuxwm7e23CBSdRMX5sGiLds6pVGqaKDThrnh9CLiYrHfNdgPCgF17ZVbKwbPK3AW",
  "key20": "3h9oJApuRibrmPRg71ReNN3phHSxNyxeZ9EXBY3yLC16HKdThajQpUQ34AxEy7FUniVat3PzGqgCKxiwj6NLn3He",
  "key21": "2sSiEvEtpsMseX2r2BEFfQTLqMfK7TGQdJv665UmVuUCiXGghSd6AnZ791LZEpT9sbMBFeMYHaRbHSPsDKcuZojw",
  "key22": "4qq2Eoc53EstyjW2Bg1n16jtwf5c3gePkBjQgtpjdsbyH68wtPxTfLqckg9bHdZDmh7npi8fJnbx9FKmXeBBcFRP",
  "key23": "4qKWKsmANcdkGznU6UEtaMos4KcxtkVT8DDcyLKWrabeZdqxp8jpaxZ69qsCmSvRzT7tQoF3kwbtp1W84QGCxf89",
  "key24": "4xqGyfWXZnafbXZ68DtJCnWc7MgMRFfk68R8PTJPhDd7k6uMRWQJXiJXKoZWPju4fXwHmzk4vJhcwiotvYiVqR9n",
  "key25": "4GtXU2uZfEWYT4BcRiMLNJ1QLrW5RZU8Kp7FVffhfobCkLMtc3ZQt71hp2iaHvJFSrv2JDRpUnzBXxysK2wXohir",
  "key26": "tNTTmMj7X6TBgxuooiqnJDBnopKtL5NgfTBmtt8Bx5iB4ghqJj2ahJYQ9VWpst983Mjccjk5GauAQ19vo2iTmvB"
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
