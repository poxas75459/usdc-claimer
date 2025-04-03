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
    "zupKaq6rYbHgSRy5zeB29V6G7fyeVw61woaWvPuErrSq6NiWUZSVASqqLGDSYqyujdWNN1RksDtNEHHnVbFoC2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ayrEBt17dJeRZkoFatNGkaidWR3bsVto46H8ZahB3RQBBtJ1vv1crA8ycndq38YTMN23T5KN3mHUeX1bq7pgTku",
  "key1": "4gbK8j1Ua2HoqvfseuVrgsyf5g3GDS1vG4gc9nKFierHPm62HKG5n4BNcm4FQPgYrQDKiagEm2J8Cf3GrGHf3GGY",
  "key2": "3aKJxXhwx8Ree1EHiFxteR5hCqn92PcojUSHK4ee3j15V3J1UQgRcXwdWM8g1wvd47fcHADVbwcMm5TbZJBTbSsi",
  "key3": "3YjE8v4HxG3hDaBuYED2PEwbR9yow4puEX7NVhWcknH4bgi1NranhYsqUqs4GGk4UMjw5csLV4vGYzcsi3TorPPz",
  "key4": "3kmRVyEBoPT7EA671FHTKwHARJCVHdm8NGGbTgpKpEjSQEYpnDWW4hnVPCfFeoMoyJVBYEqjkdRiFKbJ3WmaGzug",
  "key5": "4QDrxX6YanNRyJFaa4MfZADDRutGau6SFReTocwJVhQKryK3RU8ojKw7L2MKTeyfxgrSwPkzsAJANdDi5ZmdDYYR",
  "key6": "2RqvoNRxhyfDGj1M2bEbYJ4svo46cV3tqLdDBLWdYvPcguQ1Utuh414FZ11qARbt5e8dymoJTePDWScJZRjCUGVA",
  "key7": "gtXi3zGLTSrcAHPCv7M9atJibN27KaqhGNcH48yCuth6LoiZCkoFEQs2jBZadL7tSJrn6T7EhT1EM9X9PSkxvxy",
  "key8": "4tpAQaoJyR7mKhE2Nmqa49WHzyP5QK1VHbYxr566L8yq4CQiahgouMHh8muZxVG9hBxZJJmUbWpw2x8EwitqiEyv",
  "key9": "3CDQYL8mNNWCAP1cdRx7jHEoDeYzxmctri3zzFMTk4r5k4SCA2Kd3VSwbtKHS7vXf2TRiWCVVsVox28eXN4PaA4v",
  "key10": "5gxm1jSSXGLTXDZEvzSYoJSPsVKrFjEk4GpmFsnZYx926zmrWU8JVUFiXLJ7ssHnoHYhpqSMYJ7FaEMTEA6bBWei",
  "key11": "5tGpJNj4gAPjFngTmC9KeLVM75wh8QrzThcbh9QwyKiShvyjiimqrKUhDUKpVm5B2bQU9zt2kg2T9Wvwxw6KY6Wc",
  "key12": "2S2mkn6uEPEHnnmVa6r8RFUHLuhNmXUnRxTz7FxZSEHwnSZGhXKjA4VFh1qytLKgkKjNYC2dspbqusY6XR4T8SPC",
  "key13": "o9uZUmBomUTXoVLkRmGNSHdGsfX91yY7HmAfLcaVzhTTcBZP4Myz8KLt7xLwXJoY1z56ZGfUCddzUjmetDt7r7W",
  "key14": "26FQDmiE6YuRiresEdEm3bwwZre59LCaSS7zH49enEJ4S98EeK89txAfJwGCwK2MdtrQEiQbSCrL7MYW4wtmvFwG",
  "key15": "QE2TXTejGcwb6rESy8TyjgA3HGXuDHMYzFhBLYQdtXgm5WVj16pLZDVW9CN6AQoetDwJnfXcekxW2pEeqK8CvwV",
  "key16": "3zx4dorHpezuiGJXkgDifYyBYp96sXMtDJsSWyEZDqQ9HAgfbaM9X7a4PSbh4sz46Q2J2cLUFtPojsHPh2FpN2oE",
  "key17": "5VxfuuRYQtbp81dDYrCE4VZ2v9jbP5bxkyEy83sbNGkwLUwpJeUZZ8NYdEztRLHgBueipmn1V83SaeiAEA1DMJA1",
  "key18": "4QxdXaUKxHhQxps1p8LKWXV3K8xzoxTcWVfKSLxJ3YA2uUFZzWoaoh4TkKYAyK7ufuqHZ56BnLtzgXKJwTrStqxK",
  "key19": "2Yw63XwE4f31eePXhLtnDZdRdzTxDZaGRJsjhGAStezMGzHJuNQiVMFpzXhvxppwGLsybgqqngtDA9pbqyPMNm9n",
  "key20": "5Eqx4H4hXDrxGPzcCDBYg6H2brmkoVMaUYYPmkSuDejXngZTpE5EY8Q2sVGjY5zyCkdmbogct29ZVLydZYhs5Ngi",
  "key21": "3FXeTBA9tyTjegj8SCYuspYmfCsHe9fphxUJD996iUzSsXDZHo1GdPYsgrqjUqnd22R4tbzhas5N1qYDhM2dStcd",
  "key22": "xoaCaqaPyZ81Bc5rumGS9T1ugkfArVbnSVTWHcZ8BcBAmks611EW7yd7ejn8doEoCNJ7a2Fq6Qpy1GJC8xrXRFV",
  "key23": "4DLL1SXdiPCowVRCvLuq1Nyw8wQvhoZ7EUCnhKg4N5sTzivw7gjGWXw4ExJZm2SgbSbgwog7Nn5dKEQdWEUZgYHv",
  "key24": "4Rxua3G8BF5aDa69iWMtQvhzLCr4UJFrcG7pokSQdVpSXiL6GqVbHZMfY3dyQfZ9Z4XcyzSkeTZ9LSjqSCpjydFg",
  "key25": "4ria4VEjogmkht9HBhSgQhDH8gfEVE9PjfpsQ8hEq8G8ydZ4sDV24QH1xMFKv6GKXWE15ckhYuzJkSg32X5Bx7Nh"
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
