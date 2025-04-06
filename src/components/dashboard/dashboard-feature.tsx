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
    "5kvqC88TQf8P8Fd4iq96fhzhwVYAeFsm6qKyLoWRqZUgf6oMzmh1xGLNtZccEKyK5qJTNn9QrKmDBd1h1dyQMfJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DdSf1bi5b1FVtQSR454M6cx8xycbmaeN6rDU6PXvekjbCQkGQU81UcpAaV4XkpiQBetnTVtc2Yf9bLWHpoRoZC",
  "key1": "5eM1wQ8bRJcp2b7Zy7Dt9qa5fWip2xiiS72LN55JVwcEaCwGjjWg9AHe7kq5rUgNMN5ED82Z5Hi5fhBooU551YME",
  "key2": "5oXTKyyFjgREhyA8EFhJVfxeZaM2mG26Y6M1juWkQgbgPq7EeSxB8wikSYyXyFwmUQBo9nnHNJsEaSJ7qkegZtQt",
  "key3": "5uYdaD2XA24SGzRaNSYs6q9GVdq1Qmh1FRitM2pbm1U6dXNYWaYU8RWBNccWTfpopMXLfW4QeaXWo4xVLSvetJop",
  "key4": "3MTqJ4eN161352sRQ8PRaVu9YB7MSv2Quofnew61qEVAAcJNEbwGVXqeKYnbLBFg5Tq93aNrF9rKiatN4N2fPqH2",
  "key5": "5isaBjopkbWcxot9cgLy63XRYFucCiD6tTZdiQHmC3wnKbWQjpNU1ALXV6V53YWuUGTKzQVADWRqiq52cAAmfSu3",
  "key6": "545w1hrjTTyauTe41D6ebBantYJ7m8gx1Z5VikoTE6homJ7ba7goMMMa4bGTGsMgHSgUaZFYMaWTpxUM4rmhnAwe",
  "key7": "5fVjtiPxFx5PTS9FZRijcMEKp4F6emkBoemGTXqnYigDMZpLZY4cqK9WEhG81oVkNk8T6vh2sNzjs981MqkfEPVU",
  "key8": "3Un1XPtP3A3ST74yEAXtRPnb1YuFB8bn5VYaHwmvFpn6YwAbcxLWL9JYRkcLWQmydEWDZQtRNtp4SisyGGRzkDZK",
  "key9": "64gpgSYpQ6phWeyUhLFyGQkwhrSoAgE4QaeLvRggkvCQwYzghTbG4PswAgWeNww7ynDGehw7p3CTusmZNdP6x4NB",
  "key10": "5kARTAZ9KwpjGjerzntMMRPES5mpMFEjAe8HeyoiefDop9imS28LCfv6sq3yeZzv5vnS54ojcdBSunzEgGsLoaWT",
  "key11": "42z255x5h6zvgq19Vh2ALeQi2tu6yq6iSLrd5qabponVVCvXRzinMyxDiMxk8fT2impRUWM6zwWuWcgLTSu3dLzz",
  "key12": "2hPuUjqUiy9GVV1QyUFdpVnjATVmXFWZno4ykGsJwzonk9fitVj9TiRWdyKH8CRHxGog52ABav1Shcskr2J1EsBy",
  "key13": "wfhQQivdsChMXFuCoH6CGPFxfqxzuxpAumP85pQV6z3TAW3mA4ukmxV8YbC9CUF7oFndy6FYbFYGbxsHUM3g13D",
  "key14": "5791P6LD22xP73xhdaCtmiueZLBVrXV4jdr2bXsWNdjq5Z35ZXsXQs8za5bzxiXtrKZL9fm2ikoGzXJ7FyT1wTNP",
  "key15": "2Q78qMyEA48NkmoCF13oethvmEVXBmLwo67BVx4LGB9SsbFCDqXQXPhg4c5YUpVhPW3XhtMJ8eeZJUj3zZ9dXV6U",
  "key16": "4LegpmnT3biSQTtznYg12ejqjzgmqKhA5tuRGbuA7Syws3sGi33f9cGuodGSmKePNM6SDvx55rMuAqoxfKRCu9Vv",
  "key17": "3wCX6McUvUgeERA4CQCtXk9p1UwSTVy2MC3jDyLsPue8x5LyhaeMp84bxDobCZSoJUhQBwsDPMm9ZmRtBh4H57E1",
  "key18": "4g3dYanRJTo7zfFVddRsmv5cG7WNBwZsGyMGj5yks2RC2DbMuGAUTLUpz5x2rFGWoHyx95nXFxY5cobqKYEYDnDr",
  "key19": "fwT2CgMaxeRftaV8hEzLGafs7zt1CcFh4m8H6SHG3G1uMgUWoXxJQf69HMpACCRR4x577eN1eERf29TcokMVDwo",
  "key20": "2t1fA6gS8t8pgyJfEGWtAKjjqu4UjkfuTSZ8svkkbzh3LoEEaAeG3KycguNAeUcYwqHDUtnXs5UGWYRLC8DxSHxD",
  "key21": "3PDWbd3U1oywapqNvEMfaQs7S1TDk1AQC324xu39B5XfNWCBNeRRVVUhUxnwZ1A2BAycazWAh6Lf9SSa2BU6HAi6",
  "key22": "5H82ooVriQ5jtVpbAB8MsYqCciWQkPKUnmqJjadd83Ti6XqwtNmKaGWsmxn7N9NPj64WX7zpqA4fwrwWtc78kwx5",
  "key23": "3X2C1QCgYpW9xZYqKqV65SPx8iu911R6VoiPEX9nQmpFRFRgwDmJrf52Gr2uSFEa4hxLxGmSwGQWqsRc1oaZMsgS",
  "key24": "yC3HR33oqeE9hwjwtZs6aDZLgkZuFYXQArro8E1xGN9DH69k2A36dwUe2nANexYvx27Gk26pSJ4a1YN6KKtM5Uu",
  "key25": "haibB9QcAUVBBqUERSpFHUSYPcjdsRop45aAPGRni828YbvD4DRfddYzRDCeZdPrjHWoGShga9NPt6GwiTbTsWp",
  "key26": "2YxeoGwJjX8DHotK1Q6dLftPiMqM1hXhaqQeD91Xu9PiUL1q9w4ZEpUAhmnLY3PT9pUkn6uELK722F6hzzp3Hq1q",
  "key27": "2qxSSkwWGazKGmrbPasmv7EpfjaiJY4MAj1mFbaMMZCSju5YSzunVQcNTZKTLSQD9o8w9cDGrw3Q42eNYyrSin7p",
  "key28": "566mKQjHeQbDq9ySbiChcPLCcN1FFExJvBeUu5q3biuJFCYeVCprfYHZoDRG8x6Qfgh7qBeEHXCcdMDcDjJ1ZHDK",
  "key29": "5RWt2zzG7hXLv48C6TprYaC1eWg7vYwgtzTEhQKo1qbeUvMupGJr5QSiCtnwaZVTwgEEBxpzESyefqjRjmJauWtM",
  "key30": "2E6iSJnixAdC5AuR28CQ9XFhxrLv8DcDXx5jJ6VYoFsHJwNEbZ5Us3gty5RzLNUnBj4SoMRJCuGDeGtYgwAyWfTb",
  "key31": "4cKwtGfgNXu6Uz7Bkm83ShX27QJxc8zwTmBiUT7foawCHkv5VZ21ukpvPAMzQX3wnEU8SNEkiZD4tLLkYAEgBEBV",
  "key32": "3Kvr7jokUYDp5oXYc4j2kL93DKWx5mfZefpWxoKYN4Pc3KxspYpEsp1Qu2jxnHyUrpcudyPxB3gmC3S8uQFUKCMW"
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
