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
    "4avq2nsrFS7vAii2UiYueTSPBf6iRm17abgVsLmCQxetwKJy5F2SczPHd4RrhAEf1Rnedu9T7YYzZoHbw2V97vx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dYVPpyJTok1P1RPtmAeq6C94n6JaX23a9pFJ9DbWz7adzvuxMKbEbNykRsZFqCqAoErczYYNFgC7LXbqGe65hds",
  "key1": "3F5wCEEGshc4cfXaTsCHx5SAipeuTRtJXnpjR2j55ZnyyertEwMoqkRR6nb52R3FLgPzdqcfZu46nDApXXUM48V9",
  "key2": "3W1rZiwCRX5Wjz7y5AD5jN5fPndJKLT6wHRPqpbjgjtEXuJLcYA6Q3xntpJiXrwue3DKaqrBJXACpAhGEhsbXDjv",
  "key3": "h3gTUQcLqtfePcAM3yHqdEdET4ovNZ4LAmqfKJELcx6UZxzygqTh9yNfAEzqTchG4R21MPaV3wpw3wqmmJSzo7v",
  "key4": "Um9TUyyUUdqhDapkNvyR1KUzszQHKkQzg4QsAYwCVBD6DkYwKJxstah9hnPrNVMokeU62NL55wSniQr3sPszVj8",
  "key5": "shDuqtoJeAt5a7J3Q2dLFhYqh6je2NapyzvuZJjEQKQGaQQJyr9t9jeDdTY8zHuYhuqLFGB46kWvfSJWMchDNRv",
  "key6": "3CuDefc8GpssjCeSa4q6onX5RYhibGABoBSbWKV58YPRwuX9rhmsKc32h4onfEJSBjT32Jeabe7EM2CgkVnu5Vu8",
  "key7": "67pKEBcXPqMP7CxasMU9JfWeoQJBxdvwHCThQYuNevrgziLExNPwiaChuVpc889DVkPACUsAcm9Vo32YhxXevXuY",
  "key8": "3p6WEvPbFzrcov5qqNdciuq9j12dJAPwmeM5ftjQEX2pnrANXbLALn6rqnvUjvm6bB4bEyS4q86fqrmMvR1KXAcb",
  "key9": "3XdFgS5iYp6x5DRiVLabW8NucXX3b7Tke7pCuL4kKEyfexTJjkHcanK2r24BsAowjPCjdWqjH2SgacePFdxvxfLz",
  "key10": "3VPi58NoWLX4EezFdfv9cwDauwFYJWRmmjSdRATfzAyoGcAWf9sshKRu2aPJPUdoudKmLDB2nWtx44crciojfmtR",
  "key11": "G55LUksxkNkoSkU87SR3dyAqmZFxyMxrEo5CGiQkffukpwn5GFvexo58gNBu2wy9B8BhRdSjCQJqNADLB1gtikV",
  "key12": "34hTk7p7mMjgKiQvZePxjrGKWLxLWCXAVKB3YpnDsPdNLJgsKKrgp2jgMokgG58NddM8YdbxiXmpJu4mFn1woytJ",
  "key13": "42bMEcMN5ydGzjRea9Uuyyv1vfdg6Kt5tUQuHMB3z3PaawwZ5UaqpQwoj4XvKZ2hiJ3vVyJMph2sV4prrXP3vWPU",
  "key14": "2CVthcbAvWyy2Dub4F3nyebsq4Makxbj2W5NYrD7efoyeGLW3avG5jxLYaWUhJoQF8zVVn25mqNSkNwmUoPGEMDC",
  "key15": "3VN5MdukDiPc1HNmGU5SyDxtmDDMugckZUpbK99deBvjHXVxYPZfLZqwxpk1fiQq6UuatbUg7UjAMUKYnhERUD22",
  "key16": "mL6289i28jKmyYj9Y1icpg44D3kx1kxBFqXLJPvJunCWkXEYxHimfgAheH61kLE3ZbVJf2TUgtjHLJ9NipNFEY2",
  "key17": "2SmdTpYgcRF1v4NnbA2tGDtay9h8c7oypQk2rWnEvefcuoA6pGRdecp1zgkBY8iGHAnKgAPtyRzoW9AQjAFfdgRW",
  "key18": "4PkzCVuzznCe2aiXg4XWQ7MkoNgXaezhmT2iEqVRHSnMkDaUb1jCQQGuJ3wg4w5jTyHv3ySkVbdbNZVirLmx8Ciq",
  "key19": "4bpLQXU7oug3Tbhop9U5WD3VDeV5nC17sQTkreKKaWHX6uDhKeTHqpKiF6iCGFtQsZkYppz3jrTbcwhgSFCFukj2",
  "key20": "626qaaBuiCJ2BaKb37u97Kyhet7J4tnc6NS5X23xPWE8h1HM1gqc9coPyPttUHQnvkuCP2k9UVNBDa6n6FzgejXq",
  "key21": "euUPhpwBPCjT6A7uLcKizVWbsr9n7KZ5EhVhbyEVx6MZ1Ako2Cv7eFdHHKiTEXeEFfxr1x4BdeRMtTCu8JJ4ENn",
  "key22": "9YTubKkAmowLiLbjo32abAd2LCWVnDoR469m79RJ4vFZXejdLvyw2coQxn9HBFq22DqEUYGqTrcWa432Bi4vBmF",
  "key23": "4KNmM7N2gNVjvzMXsab3teYKZ6hFzp5t8pSPtK2KC1aY9tYJGqVx6Pzhg47vbqXY6cZSt4cZD69cEd6h2iyAksQX",
  "key24": "AyaMz2u1pbgnm8EJqLRtY6HxYDpPNPAVcZCAeuKidixkH23mjin3taigfFo2QJpdpcPrhhPo9A75DYtLpaDgwJ6",
  "key25": "3thsybgiuuy34LkjSrNH7UatNCgfvEXevHNUTHPifqC3VxzAwGVGy8ViBG9kbAykffXKBLoqPDseqBh6SB3J8uoP",
  "key26": "2bqbJ5tmXar4awwbZJCbqeHtyi1QeGvXDKpdoDFxspggHjGraxXN3gcHzAv5P7v3qdCLYw9JbYxDL6yN4Dm7sw7L"
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
