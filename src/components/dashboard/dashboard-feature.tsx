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
    "679mMva84XGb1bbik5hfS7M3RpJ1DcrVrjFKihfkcmN7vSyt7mu9pH5tjnXwAZibMZXG2dPLfESWYJKCb1ZNYEGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EsuC6xaGHiiBKYuehYb9tLBQxrpjXTbYpEvt7RVkWotufgJGPDcitQH1XvyHqebuRcD8Cv12jvAwXcj6BbbxPjB",
  "key1": "2uoiWJB4A38JskmpxG7fdKfqe57tN81Qo6VUiF6dyQME5x6QEXqUEadgZXfuyLBe6743Aw9GfsH5VyeYFfB55f92",
  "key2": "5iETchbh3Q5ENvmTeF5MRz59ShKfbn6r5KApGinK14eQrdbXdC2EmYGczzchQJFfRbwz51d9qqW2Dqs2JMaMgfgy",
  "key3": "5eq9VvrUu2tmbVKac6Q4Xs8y3gVJ2YvWxX9rALNYEHkVVjupvzyWTp4LnfHaAwaAjJQssiA2DsAqsRGMHYVtAPNP",
  "key4": "2NfsEosbvTH8QcFMf6NHnV8oVHvbGngQqd92TevQ3V76iacpM2jGCeDpqyoN4RdYsvpcLHJDw88H6jvWKqcAEeJ2",
  "key5": "5aTs28e3JoqX3TAKPWeZn2YNbbRTfnqCscP5R41VtnUU3eJVxFDY3rcwwrBai4SfDWKYMxCjTcpfTVEtxSC7Ey3D",
  "key6": "2phb89P7WRXE7vHrc4P7rk13BZ22yYazm1PA8eoSbVDp82wKXpY5K6HGqEvVdCvGTHMcEgdWL4H7X9z4aDK5ZN6C",
  "key7": "58nkc2ty13DuGxteN1oH9tV4m6j7VbeJvM1WC8gsjgvsKPeg5UdiheQQ4EX2UHRbwE7jRmggcn3AvKR5uFXqVyh1",
  "key8": "XVVKJe6X4gTJnVxJmxtZMCc4Gkz3s5NWaZGsRr1Dtnij8Se6JP2MocYJhzzqMksns7PoAXPY9uLYyba6Cdwoviz",
  "key9": "22dUhwpqS4rXQYJngeir7bn4pxvaPkL4vzwCjofXWiKUvnfm2X2MnxLG3AN4ScmsdMCdkCAWCyAo295RzJFzxiGr",
  "key10": "47TdTaAJcVfrgeSYMnGArR8WC4SmLiCnQnVrqxgNsnXrp7KPKWkefCmtSrrjAeayzTPPM5FeSRaDMS28LQy4gGYJ",
  "key11": "grL8L1j7miyDjHRhQKfVVgsoajZpPEXB3bu1vELRC6aFnysXAZCNcefjhN6Rd3Mr7snvzXdaeAUSFx9j6xqLSRo",
  "key12": "4mLvVr6F7fj8VmvybTABkHXVjraGEngfpWSJGcWpVRfTW92AY9wdCR6QEzCdF1Ld1ZW9iXSt3tTMuF2bQVExoSGc",
  "key13": "5N1bvwgDTiNkJDgRzPVa5Xs8JiNhtoy6Rgf1pq8D12WFZb6MGPuuAnbBFKV1BfBPVZpGozdUgARGM3vEK9iLdhqV",
  "key14": "rmGJ39dxKcd74FTujsFVnkP41yZUgQmzHLGbfTv2pj7BfDEtknq5jYMRW4zHHW5yVaP9C4Ei3J4yewKS5XYKAxE",
  "key15": "2F8sR9Y5AHVwDiPgYtdrEx8RGeMS3nmesseryiftZ66simAJofz6D8KDQ8qJTCXZYczeVAMercuJ1WMh1BoYM2KP",
  "key16": "Wjhe231ZKT3bKfnUpw9Z7m1cg39euEQZBAE63qtBoDqp6J7BNCJZzMPsbtadw5TvFm1J4Rnp6cenPMniRHjAT6Q",
  "key17": "4N716B3sPhtHV25PWqRkT59eddzJENKtLaGWvkoZPSoxGtnHdsQViYynPgzr5SwqKsbjbod4YaFDHYpEiLcBZii",
  "key18": "4Wy8SKDUPiRXjkHFc7RsuRFH6uXJnXqk4YcrMceaqkbxMPUVY4Lv7QwUrfRqoz3ZvfREjTDLuJTGWWtr5K6j2av5",
  "key19": "5R7ZCP7ZHD8FrKSW2Aeswj1RFu9NFzfby3U6qoj7Pi39dNMNEBE9EPzrATTYCW2njiSRqJtYibgyxK5pJiDjNL9j",
  "key20": "3D8aDjbCoyfEY8fNkppMGx1xM42jSPXLtYzp52uokRGf2xtiLPUwKWagzDi1i4S2cBtgCpWLGRdz2Tq9aRHMCj7",
  "key21": "4aH3fcgWm7zxByqQBjuyeNQi4r5FoLofivb2SXPFNt1qLowtomVQmNjkCqD5hta38akkzKdDoScsRFkicXGy2VMe",
  "key22": "4Ev9U8SykvQLe2zMqX8YrjfknTGwLysqtfTMSKPyJfn6uXSsm8yQXZBRZHCX3WLuK7wer5jm4v8w166hNU4ChUDt",
  "key23": "5MihkHGYqS7eoG3KfPAkjq7oMD3rttFkG5ZVVRJEDerG6uYyVzfomUf1LzcY7hSzzfskAX2sx2FBzFr6EAaLDyAp",
  "key24": "3WPBtGCuXZrK7YPAzEGszuVP8DFytcD9aPFCsdiQcH6ao3w69CM8SkpwRMmFmXwx9JBDjEpYadGCQZHWgVJGEcaZ",
  "key25": "EMyM87ghJ2mhY3iRBnBjAdn6sbuwoqj6y4Zeg1X32eiryvSGeq7iHB1JPvDWYNuKEH2CYccbS8LzUKmfgW98Zk3",
  "key26": "5D2t5FK2NGdM4fCTFWHcwq7CY15Ur8fjpMGnqkhtaPBzEyGLaZ4doHzBBUEtDT5NEgB3KwtghM2A7rx3eHFauBjL",
  "key27": "26ADRcFqLoin86zoU1rpNjLwPkHndk5Z3q1ooo4JZt8snRKPZetzBp7XM5MX9ZU71SZy2oHQWhS9Aeg6igChmfL8",
  "key28": "5Fn1XRWKW9MwGR6LiAE5jattvVYVuEzEgcZR9bG28M5RpbGzHLRopvPdF3nCJpzX1G9QML9XBrcFZjErpRFeCYr8",
  "key29": "2VYGXgAfBMHf4tEqpLdQUvALrH6h3EUoiqeHBcqdZxvktTsdAo5itZbbAxGRGYnBBzBfELcf2oJdY8427yGSgEtM",
  "key30": "1J5BAQtjn9mj4tEewecsKsNFpnmM4KS2ZfvnEJBzeSKXUdKCZDurAUVZGCEfVHp1F22s59tkFULehd636UAjqZt"
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
