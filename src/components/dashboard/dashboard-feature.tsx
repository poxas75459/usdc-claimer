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
    "2xUkWJntddFEbu5WwddNPUNNdqKbJY7VoeM7H8DSFt2ZRDUPFtwec4aHeqw2m9de8YzXCLEQfF91NcT5SsbERBkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hs1HoJFDSY14k7wYLA3pCCYk72FNXBGwT1RJNTwXa7Yn5XdHKokAs1povsvChS1E11pU2rWpLVkKwV51C6U5zcE",
  "key1": "36DSdTD9k2MnzADoJYTZ1gpyAM2trnwtFQJki67NZcDrQfuhEuGPTernqusMTyWBiRUQFrwui4vGMekZjzfPqk17",
  "key2": "5PCMeSfHMhy4DQaCUsi4rdGBGoh4PjSahXKsqMW2Bx8UjYdL1Vs61AJXW2QD8kaFyh2gJE72wBFGKjhcU5VGRv19",
  "key3": "3bLUFuLewNtjNNmgCbLfN6dtyWSD4MsvLDqihQs4EHKzZqg5tP72N2NVninsFbKCPp5jxFiiwAnnWH41cRMLQVf5",
  "key4": "tC79nDuSLGosND23GktxSxFNNqQ3dJQwMsEg4DLgBoRo5VBdAAAYHbcWvfMBrVqzCDSg1J6Rx5XedqNjLL1p5uH",
  "key5": "T4eDAW9ZRZxKgXz2ftPEzHo61wGtYSFitEn7sc3X7fVUukCzrt1DQrutbgf87B7yLk3hsqjGWPvb4nW7uz3Dmz4",
  "key6": "2Qt6ZJbWPj4EBGDqVRM3dFfzop1tNNPUnmkHA6ZpxGVEDvNNjriU7RBtmE7AVUJLVQ2hsiqjSGioPvbniD1KKCnH",
  "key7": "2UQsXkCPXRVHiJU1St97t1qLz8SQSKLehjhN2qJ5maNWUS9jrh9pGiUvRyFbqNJLCxc219BYjSRUZ2DstTcC7PLB",
  "key8": "468pPant6EWUtB8LKU743xSeJskJ4PPm7DpvXujmfSVeHkJJVBcQe6puEqEaEjnsvwbSwyGrJgFsB2fPR97DnUoV",
  "key9": "Hozef1bc2hPrS7RU6pKzJeJ9DcN51JiXZ27EuVvNwY6HZrRCBNmJ8bjr2i96xp4oB6vGn6tFYixfaZWFbdoocoq",
  "key10": "5M37M8cxrBdG187435irZtRoctoea5Ufy8vYzJPgsBKG3bc3yHZVZ36Hc8WELypvUxkXfhC7Wy8am8WJFed2wjKv",
  "key11": "5HQX68kxEzu3Z5Txf59bemc9RDBPbsFotaWqSeN7Wa6BoNMwABbU6H9jouWJn7s2iQqihoZcsErABMDExTjFMHSg",
  "key12": "1ZoAW22xZnRis2HqKoFaZ4Q4YyeJacxDpPWNzbueEieKjJc4ZTQv7iFybNtfZNvBaA7A8MXm7LLT3SAQyMcXohU",
  "key13": "wskCqa9RboB4ViFcHHmRd8L4jDrX1s3ubLgJHSyzNvGnUej4QRpabzsdDwrxrtfcdLJ3mrSaMyo5oYyPfMZs12w",
  "key14": "2xsv4MziRFBnPfw4EpJDmguV2Fh5nxAHBDboLdd6LfBH5TcCpdtBYY5QdzmhRkTgNo7sLNJb7P462UXYk32tmWYK",
  "key15": "2Fxf6kSxaPFZJBGGBb9t13Rd7Z3yLHPrRezyURv79ZLYkrNyiXusFZS657Ffdgouk7fVV3HjmUbivW4DzvD9SuDo",
  "key16": "3U7VJ6geNTynL9k5zzBXrCUnYZyH98wDV2J14Gt7oXA5WU5DwBnjZM6jCJnKmNohL2nTRTXWhPiWphDjGQ6pYevS",
  "key17": "3QW5bq4PnTmt2NkV5h9SCZSb6y5B1P1csdRrZWgkqas4JsN7kjfEfYHXZCac1KdNfZPbHpjC1pgZxsdjKnU8LZXb",
  "key18": "5as6NxYWCGUxskuQUkNyoHE8NDBq5knkoXV1j2uuUtxNGqqbfFyHDbz6CG3GfynjnpGiqzj678hhhfnZTQ12Mnpb",
  "key19": "rPx6xgmCELcWRCM9QvkMnQXMqxQrpT6HUkKPVhvZuncPCP76q5xsfoArWRR8WHGyxirKeh2sRYvmMWGGfe7NguV",
  "key20": "2AtbvsWB49Pi9CSTzsZpWcFb2XhLw2EijoaSLQ2CR8Vwh9macwCkgR3oqof7rsF5hG1hyPR3cd4kY5egJepYw2dp",
  "key21": "5PbBfmrpZmsjqStyddQESH9ZXrCmyaGXz26aBSDenZNCqFCNcwc3ujzXkxrH4U7WXxmfQZx9V1rnoCvYDwxzom6L",
  "key22": "5Zwu9udbfxMsMTW6SmBGHXzSPkfaShPgAZ94dyRbK3iGeKfQZZgY5Qxyznc296NpaCYqRctMrvowK2UStjTgtwF3",
  "key23": "2kxWZA6ZHVNYF9EnCUGYZ12Yy9CnPP21bmMSVrja9EhHYmNNkzB6JSzsXx7FpNUsNBHVTmBWVpN5ZtS41VgqniCM",
  "key24": "3q8GxeADgGf6jrGeeW3Fg3aYHYmNH9tf1YEoVd5KfgYvbDsD26zzZDmrKW4Z6twew8Cwvs1W8nmLXCXE7gZwYysM",
  "key25": "31Bsu1gc1pHUFiuRudN9GqsHUZhZixBDJiCick1R1rup4XRCrT7bkqMmWCKiXrUbpZpQpJfGC3Ttz7tG6aAxDGPR",
  "key26": "29jwCcfHuGehrTZpwPzU3MeLVhq15tTx1mrAZC6P8znP1zqBupYdU78tBboX9gn3QtzDwW1Z7LimUH74Xh35ypm5"
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
