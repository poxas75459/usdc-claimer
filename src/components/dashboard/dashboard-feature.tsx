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
    "19BzjYRohf25gF6cy2enQmZonAYdsrxLmZ5nbqzEHiAoQJhU73BYPr2pfxm1W6v6Es2qCPz2pUg8K5HFPPpDBbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SokgUe7L1qi8eV5vechm7fb4dZepjYWhb3GksbKUj3VY85VJhRy4PG196J7nfg7ueZBYsiFZWQZKEoa12q895Wj",
  "key1": "5uRusFVuwho8ZGWbcuJusW6FgpJ4viAmpSknDgLyGEXW6eeUQyDCWGoqgfo3zpocJTEzDjtiQZonNJ7AmSXdyPCY",
  "key2": "31u9qBdZZJD1EsF6mKP5KkmK6VJy2C5D975xejF11mpt8UhovrzG7LoAT12sqzREk6PWb5m9BNFu2LST3GRzdrHi",
  "key3": "JGEx42yTY9iYUgWTHCDvZT2osiWiREAThfxwRZCoMXCLuRZV8dEejsA7g15kGFh1FPUrGFgn17NXBXSVoACvU3m",
  "key4": "TQvSuhsr4VxNy3X1KDjLV7ynQ1Tm7zSzkA43xKqUomNTWfyxVnXukUA3yeVXGvcR1rAkB6ShJ81qfmAjLnXcmcc",
  "key5": "4Nk9S1m6SFtzACSgN1depqdHowdJvPaGhUGoNEeRaUXNoJqghqUXeVKfGVBPtrjFwoVBrUgNfGDo8xFKsGtzu9Sj",
  "key6": "2Afguz4C6j5GAm9X4ipKeC63m6SX6mCL3dxqudQEqwTpjurz4cpQSSLjaehaHYd8k1vVZWjPne9NUZygLTa9GMU6",
  "key7": "FLhGP2dN7Pq2u75J6TSNNM8o9hjEeri1UNTteBX83iaoJdK4z4rb2DtcAV1yqHEq9mX4FpPWUC5B2ULUB6aZsHM",
  "key8": "23abpLJmJ7XbK8PbMiaU1jmGDcPKz52PB82DHBoqXJP48gSz4CQU5wpkT2QwMfsYaQGk7aCVu77bSjsuwqyqSU4Q",
  "key9": "57ecyif3MrsX8mbQS43nE7HvbQvfJJWVv2W2j1T3y8R4Zg19rLfFkzLqv8vmkrvFqVReLBASsakFU8E6JLmqo7Eg",
  "key10": "vprbJ4hBo3uCx9GFhzhqFhnCmrmYqhMidZ889LgCVLmc2yPkpS6AioTeeHDP4HGZ43TvnAzj1X7mbUzCy5v1omt",
  "key11": "49Eg7TAL7jqy7kLKaTE2oSNFQV8EwmegdPrHRyKSEgrmGBJZYND7zp62PENF3orNqiHR68wfV6eVuEkt5oDsVUiP",
  "key12": "48RjmbW9zZRHp8CRoioHeZnaCmep2x66mTS64KwpKH6KvabZTRNMP5aJuqoSdDFvJ4pQ2anj6LvyYSWbsepjXR6x",
  "key13": "bNSs23ruBJGRy3G6mqaGDGParCujZi6fPuhKBJo98ne6z6V6p8SCuftYWfKpTJ1Kp6FvTDyWVt1X4AGrVyuABC9",
  "key14": "4GRjtU49wT8H8tQu8LcYpZufWDaCkbR5BBstxhYDFeDA3K2AUih4hK966DTkTiN4kFCaeoa174SxZJfM6QuubENb",
  "key15": "2tpPAZU3FHJSCpm3PjCv22vwMCiZ6ECsvyo1ikXGHeADuGwVZR6iVCv9YJEYHHFn8SuMqxZoM116hLAcxLmkMstL",
  "key16": "vfDRvibTtzmFJZVEC7n3dRVDdmrTEPZFbw11N3tFdwNWcbdK8fjHnrdeqsVtsbJXi9iMfzcGV2CivFcT3LXrinr",
  "key17": "4t9WA4jZTTB4rugNWEWyk9qvvUsmR53h9txMuWcha8KxXpcKrXvaiDcrzP6XxLGvjPPotVbcb6WLA3NwZjSijpTQ",
  "key18": "4tCjgiSvsrnxhkhtXqMavcNPicxRCRzFSeUiVcqhShriUS4wypEM2KfneNfufcvvUdttSMwLRkdULui81SH51DFt",
  "key19": "4fd58tJvghfWXL8H9jkszzrirNHinmriiT6m1jEu6tuPz2FcXmM5TcyaVn5w1To5ALEZFY7ynPo8AEWJEc1387Dz",
  "key20": "4nFJn9hVEE4tnxumoYM7FyJJhcsqLLDh8UNgz3xdFNiCtNJcxnz3m128AntYyrMUmkPRKZ9A7XBmwtdLcLNW9bMW",
  "key21": "Va9LRQsf2ng68pMVjjtkXgCWZ5cuZamZxs3HxE4XXE99Dby5epLm47xeokzc35mJ26kYoV7H37XKFiYAF1GtKWk",
  "key22": "5DAoRhqhJVGK3M9Xkm86775TmLJBZvPXb4Knpv9gs8eENNpMaQFEqmdMCbMMDX5tpS1v1wVXWqQk3tUam53Hzpno",
  "key23": "2Eemywm6qMijXkZ1dQdhByZyTz9iYXfvS8fLvQik1ZkKTvhK5jJgksGbGHW68MnsX2ye9Zuyp8pLgyX6ppqytmAV",
  "key24": "65pejSCncLTekUQrvPXMiTb5BKfT7NJR9mHbK51wmUewi6HwwUaVCvi6rqZtTRfsv69rGpUVfdXWbFeZ2D1x3DSs"
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
