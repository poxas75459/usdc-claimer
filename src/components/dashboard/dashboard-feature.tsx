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
    "ktQezWfVu22mzmU49FfWEgiQiNdFnULrHvZxgYG8YYsSGDBgofR3aZnbULcNxKxHXUGddSMfWKpCvVPspDhoGyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E8jiAmv6LSEfx9ZuBSaG5gT9tepgdKE55AjCmE3KkGXJETx1Sax6kZrsU4JzFTnCeioUyG41at7HHDN9bA7Vrgr",
  "key1": "2YBys7zcoiXLKLkuEUUXDELA9aJqpjXP75gu8GwfYDGD9qsTuPFA7vKCdTvFjYen3vPmoE4DtmxnehbbyXfp5s9p",
  "key2": "3eu1p7e7CWgegtygyqyrP9Ubc2gLosiceBUJFVSArUQRhgXGtPJ1p6jDhEp5nrmRUvVXEA5ZqEHqZSTNBj9VDy71",
  "key3": "3j9GSkRjbGQ9AbYMzhz5tgUrz8SEpzETHYUvutxhJJfMHqxEE7fuNxvCpMCmnAJBcsBcv6gt3X2HBjGFJ8Hf92nU",
  "key4": "4h5znbfXVdo8q4cPr1JznD3w1vPwhRpXzBeEF8jrttZ4ePqsybKYK5nfU1hsVmkbFTWxS2Y2ZTDu9AYbk6vtcEW1",
  "key5": "PAYtQFuVGVjq7sfnrixYPvAZob99V3PEgbKUQEgjcizWa6LgMpUASmbVbd2gFkNkhVxAe4pJ3NZzQ9z6wxAXRRR",
  "key6": "2NPBvtKwSyxFkHEp5DVJDsy7i2vqu7rUBTCLxHgebtAm2fCmPNHTZj4nxZzmKVTGP7mUEv5Y44g4N6pedZrE7zYm",
  "key7": "1Gp5j623bDFx5zGZgKqCqzfpgArwqXZzzK9zEU3E7GcsxGuAPfYQK27aeVjSGP5Um7grUFNhvGcC2UDZ3maBzrF",
  "key8": "2S1K5d1YrvaKLh6JfDF35ZLmoLDULyqneDgAoU3mtCc4JgnaBSku351Y5vYNNvPCAaiH5mi4YsNEp5zqZgwFUPzE",
  "key9": "3cioGirVd31DvZ8M7MCm8GZnN1Mk4MHNyZCfCZTmJXBUYy3awxHYLovUxnkuaKKV972x31YgUiSafySq62xw5nAZ",
  "key10": "5dGYbWdHQ7tLPtYpCaJCrvzvK1f9ZDSZWYipYsGm2dFWAPx2iCRjdbaLKUEP2dPE6rDZ9pZejoRueFVUGAWTpcYZ",
  "key11": "4mMsLGBh1BdWCxLdgzVHYJ13FhRWmYMARNwXCnJLEQmyerEFMNWjB1GYyVccWcReATNzMMm2MbscZkq9R4UKYna2",
  "key12": "3rKW1XYVGSCE3JZKSkJPzhG58QqbEGEmju58zbLnACGZzDLnULsC1bHD7p4XG9RYZHKeLGTWucYmPen56k5qsZZN",
  "key13": "2HzNbgcajPiPd56w1Rd6pSNF1zQ4UgBi6rNm7Zxam2N5dEKbBDrjtcMCVGNQnifvsymveisPMHrHzfpAqEfQf684",
  "key14": "3LbPMrjbjTBitv3NkXTp2hEHDA3xekFmEaiHAthA7hx87rTVW7gUeSuMvLpkJYXJfQadtJJxyhA3KmXoyWeiim8L",
  "key15": "2NWsJmSMftnt4ZDNFu3cCwg5SQ5uURcFwyAFeyQZmMMiYgDYmWbRXdqgSEx8G7UvCkeqd8gmnjebdMry92ia8FiA",
  "key16": "2u6Cw6zpvZkojT7LDCyvAXTfc8DrQmUHw7Rxuxb2JVjwd5DewFWao1NYx5ohwUhxxMGe3uHuoSCtmGmfVkWjZQHK",
  "key17": "5VLGSEjKomeyaDRkt13SiEEdDSjuR5H5MivHHPCFez18U6DcwYoiA692Cv1jbhhPpDUYjijLWunreCjFTsxzzKhi",
  "key18": "4jDD3KMgssqqkd9qNMTHF9MmgYsQc12mJRSa2v9HqMcE7jwhdDdBP2uDAGZJhQRH26jDNnL7XFEyhaA5tyi8K1kP",
  "key19": "5LeFdx8UygbdGNQ2NSxxdEN5N3dA3G3oEzsksBUphZgnVHJq2RqtYP5tshu58KsgxWASxtD217kXFhsDdWP5LG7G",
  "key20": "2XqGQ25BypsboumLQtnBD8ZEwKY1Ly68BmMBFfsvnCUeKsPmYUvwJ2DwHLxYUTJAGZBBQbDJWASGevUDr2UG2u4b",
  "key21": "5g2Ld7WedfscYEdiBpFChfLrNT6ztn8iZGuUYcXy9szcxQ4W8QMj5ChikzHCaXxV4mvKU56NsWvLJGEbcZStktAs",
  "key22": "8bAhafuNcQrMBuANFzj5dCCFJrgGFxuHVQ6yPouK1jq5fUFP6vap2EvdM3jnJFFrcirDoL26APFFfrw81GhVJMu",
  "key23": "2aBBaz8ag39nb3x3bRQ7f3vEL1dkci6WTaaFUezkzZkiPmDrZPbNaPAd3tk8TWuQbBDf4MWd2SsF4jhyuXSHbf8w",
  "key24": "3af9WHeNsnpCCoYj45JSxZkHDBQ53RTkamJ2aoSLbCKasreKKiJN3CqmB1TB3LVRSCkASSnRkdDCy75yNPNTQGFt",
  "key25": "3Qgk5Dr2cKqJgJcQgH7rJLiV2KiZ5tp3uXCQMduepdaNNzWWRNgVMv55HFnTopi2DqJibYk714jDzZzKajhFXctM",
  "key26": "5E9TDja28nfyAKQbfbss7DuEnrYbTPg7sFBbMmbr5UVprgsGnd3tMj9JZRoPe5i8jgmATtz8R2kNa5NiaQREnEGR"
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
