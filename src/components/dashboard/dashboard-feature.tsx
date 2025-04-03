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
    "3nJw9Nkzc3fqt3LWCCr9X3CsGxsHxoW27v4xGWW69ThBvaGX8D2vPVtKUJg3fzFALJNf6tnVjkWt4FpyGYtYmx4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2edZA6eBux1P3wAsSYfxPoZgkFWYDoinSp9kyDjzVTT9PrZKuMyJoPuM1Vdsa33566mMsc11iMR8PUxS5DPLX6do",
  "key1": "3GgKpi5PcsKXCHxn2kpFfTDKEgFy5o6wTDrEdC5pZ3CvzRBVTUWNi9M8bUnLTQWcEqjJXrstPEeh8LNYaNSAxSoy",
  "key2": "5wME48cK77JTaxdEoyZgTTnEs6gzztH1ChJCyexKx6JLQ7bu5NMeP4wpipZEfr9AezGspMugFWPjE1ZzJfMoMLFH",
  "key3": "2FqX6GEHEsUaAM8Fe7Qi4RJ4LDzinTG2XgwbNSJ4i6DsmNQ9aSnQAykri4w1GnMLhDPwwvkZARpNQ3kZZ8RR1RaA",
  "key4": "5hCTVVHr9BR1kuJeQrbXChkcbXCkExA5kpd79hC1N95WLUtqHbo2viVYQMx4o8TH9GWXPP1vLMKbUstZ6FSScbS6",
  "key5": "419VQUG4QLU2mcqryBKzEeMnek2qWCjSRVT9Je5XtYz2vbZgqNykqk7Rn9zVaMMEvBqLT5wBeqETpvUjdA6gjqrY",
  "key6": "3A17hGofgs1tR2v8DzmuEJcnZ1FFF9t9qSuNn4e1QoZhxDcqKVf1QysuLMf3BKHrKY6b32K5qUTA7FJTizofjQWK",
  "key7": "653BT58aCM88BXcbbpCX7hzP8n2euoXGeu14gx7LCr3eaHGVgjJLsuj2j34vag8L1GXYWgaP7Ya6vVoF3Bp9dEyc",
  "key8": "2VLACTJxrU9KAv8QoVkDWmy59zdD4CieRDcwJyQ4XWmVVQF9XoPKx7WT6nt7XoC8trnxRQohpfjuGp31sD2a3wNH",
  "key9": "5CsAtQAvpujQ5i4HCRZZ8NdDcSkAoUye4TgA4hhA1KDpMQoHuxjNXMu6Z6fdNaSLCtJsmpcADNVeAQQHao4kVVWP",
  "key10": "3BjgQJ9SpBZi7bz2AbyXuGN8PaYR2zSbanDSBZz3d1bVksvMMyiLaPWZ3jgSyPL3NgAe8ByEUMPviqvyJSroAktK",
  "key11": "4pDaRKHAPDpKJwPav8BQ5iRjNfZwbBUdqH6RTZ3wx7L3q88yYdrnSP2T9T7woKa4q1xhSkDLpyH9zkTY1ZeD1Vux",
  "key12": "2CsHGB7Z7JKRh2QqzdQUh6HybKHACi1J1HgER2tF9wHaAt1TYkrMgUCkPV4ttrx7hUknTWDzH5hXeEHp1GYhBZs8",
  "key13": "2Ntf6rBRh5EF9QsKVJ4CGG1BCfLkyYEgMVtEGAUmhH9GnXoUp3gPX2smFp7YqiNMAhYLRUZUUfdSBssa2KYbPbTD",
  "key14": "5Gg3PJhNJ8i2h69mnFYaLDWVdUWuprdNajMUpAsEtQNAsFRLnfN4P7QSCxmERLhb1hYUGMfELtYrfxDSbxn9ykE4",
  "key15": "5Nxj5eRhTPENkgeneTvnBaYqZKYamp2bnFn7vw7NRcXTrQCJ772FsYxrSmuUMf3CmfZSVDx6dhi1EGVu3rrd6LCT",
  "key16": "4uX5fJSuJ9JN8C9qcD8gHf6d7Zpv3U84MvW9KeiBDKaemEhtJ8jjwW56vgeZwFYLUSDGos2TckqKw8JX5yGSxvrs",
  "key17": "zbga4VQXLZ6smikNgWGLL4hHPQynaQsQyHH3oDXuB4ywuVvE9schoY4NBZkxuQHVzzaUnRbarafun8sgtPenmnz",
  "key18": "NGHwpYAmpRF1rzu4f4YmJDeYVDm85RtZxAebtAx87D51vYmAk5a2R545v9wwysGDNUZNhx6ADiHDi4SFVQVej13",
  "key19": "5egjtj2tGDcjxHdxTTe9fEWU6kUJVqdcLdFLE4w9DNcrSMw3c79mTzFbStQK6hf8ePDubkhE7LjGojpNbApFyQGp",
  "key20": "3bQGZasr9damzRDTMcuj7qKZhJGm9fFg2YvQV2QjcRQLRKz5mQSzgmL5g2CzCsEpA4WBnr8dMTsqb6tMwsBnbt9u",
  "key21": "5sWNJ1qUKj9UELxRWdebpkSXrkcTuNuHDrfNJP2Hrq1EhUmUPiXZaBxSmsKxLVVwUsHbq94HTv6fYXweupfeUT7T",
  "key22": "2u6xwqwxdZc4r6TPYJY3oZmkoWQRK9KbRyC4ucaa7S8rhLmNaRru51j6ZFcUEw2WBMprBDYWTEaM2dTaHgYtAwYu",
  "key23": "64LiCrvBp7UQm7caF7JmVmfRcVd2FNwUNDAfEE2r27VFcagpeteVFoHTdTvcerTkHymsUWv7qjTBZxrR8PxCB6uy",
  "key24": "2rciRTwcjnsvwyScuxMKReGoF1xpuWHXo2eiafjPbgxg39isBMak6sTrS4wXdgNFrBbgogxcYRbBkk16V34TmGDK",
  "key25": "4721QLuDeUGGasGBie9e5ozQaEMbmNanodB2BsuBzmWeTWBHMowEDFVFx6DjhkzWW4sTfaqPSnjJf2GqTmpexUsv",
  "key26": "64QUWSL7Nz3TjpAioDJADfkdzSbQm8VdD52afiAEWuhVsqZ2wehm3mrdauE96ooK7VTaNn9CETCdewpb7gs1y2oW",
  "key27": "5fkZnfhFEXWHt7oQZLQonoCifsv9XxK6FoKzX1u8w9YA24CigJZb5dr5EmuC9cxmJEFXafv1kR3qcrWS9Rj3uYDv",
  "key28": "5w6iyeroucomznYCBXiz9L9bZCNXvbb1gXjEw25WvoPg8Jq3oNNKFPnxx8RnKjVqNFrxGCYwN4XDMKSsBpQT2y4x",
  "key29": "2P8wAnHYCTFZTn6aZWfdh5ogVv3bWYo8ZmVRS1QTZXjEyNSzzDig1Z1hhY7MAHFqJyB6yoJNwZcKTD5GEaCRW8MF",
  "key30": "3RL5XMUauByzXTVyGsMUgaqNzfHjDT2AygywBGXEbtUDVt2grFGT7FkNV3SXrfAZMc5WrXF3xiXVM9PrByzFgTjW",
  "key31": "55BdmLBJebPH5PH1Kv2C6M7S7GAV5SRwtScH1CuNg5YRtpf4xJ6s8c5N9jhNeTRbsfskDurUPByC3rC55LWu3FiZ",
  "key32": "55EGWiZEFDZz2jKPhqE8ALpaVjNQWbWghqAyEaob4LYaYfJdQ4ta33N6syXKC4Bkn9kJkVxzZQFVdGhnhLTaCWCv"
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
