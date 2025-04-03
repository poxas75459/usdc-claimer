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
    "5SN11fu8pABHYUwSnGqijmTTxarRGh3UqxEyQ9MnZ6CC4BjjYkSHN95qA6kxdFaZYbSQWfh8SArNfzbkbJwvnL1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nGrDZVxdGNzSWfDNecg2Ngi1oGTdMK1AB7RapveLE6V3AcG4tzP3gyUdicMdiv6Cht6QACLWSnnRhCtbr6xE7Ft",
  "key1": "d41ciCx5omKDMvx25nCz2TDxTaoR5o1r5Z1aXBoYJ1qyXoYqzgUEdjcBFCWk4YrpNJ6VWLUX3BxrQBwZoEAQWY5",
  "key2": "2rCQpY574QhG9fxXWkuuqeiokFmDCbZYCc3aMgkiKn9RZKToMGgq7NEZ3VN8HFT9nLYDeukUFL7zak8K4AsZvMCS",
  "key3": "d2jTmQJy2sYpYF2R4vNrmwBr92LD9J34tmVzViiEK5XtrDK2mHtaBC8Wi2TYVF96nMafghwXxb87vgDbiCtywU8",
  "key4": "5pNqrTps3KX2H5KUc1vEp4Sz8TUNTGrXYyvAutaF9CGAm7F8X5ShdBtu2TCGWnrgXDX8FsUbD7FcGhK7oVWEXhf6",
  "key5": "5JbUhfGiHN5Y2tGrxqxZk7xKhBWjSj9t58LiZPXgoxzgNZrrJuSTUXsBAY1CgSxLpMbabcq4j68AXNDBxCp8Kttc",
  "key6": "zYsrTADzQiVdSTPbZrqdncYXLjYAgqsKZQvjXur8WGMitkkEgS5eQY2sAGRi7psLh9L2AGHu1HZf6pyYcWZF4Eq",
  "key7": "3SfsERzeT55P6U7KaRhXK4osZiweeLtnH7YpPuwzFHxxFDmeP1DsxfhnVDfim7Ro1ag3PKwKGPQ6Bpn75S3S12uQ",
  "key8": "DCnugraWAqRGz9assQqDd4YhPPa2gGDZhV7t7BnZKN1dYGQM2rSrL2AxNdmSsz5KQHPsRc96ihgkggmskkpU9iJ",
  "key9": "V3jiAkgD97EDE1fz1X1JYhvFkyi3kncp6gw22qb34qn9L7be9txmdN8vhxd5Cd4pAp5RrUzNMPix6LiqM3z1kM8",
  "key10": "4nvpyW2GqUWSPkPzb3guUW9La4yX8a8TFdoF8X6MsH1qbAfkpmq2kSdfYXKGp5c4hMBYhszNRxH2nuLbdMLHPjhz",
  "key11": "kvFsXnH4dgV9VutE3miirYd7jAV7mBj2ePPhLXjdibvy8qeBjMHVs55UbdWwYLde17FUSduMsNghz8A1a7Xk8fE",
  "key12": "UyvJNscFcS7xFsf5Gn7iYCDnTa9uR8GYrEJF6Hd5YnBpn5fakuouQeVATuzYDRNKLVjdaTidsTTDJnrZTeDuUsf",
  "key13": "5hawhzyxXsKdE3VUuQQtPf6ggbwksK2Qru7FGEefrvGk1Gwjd6tbq8JViB6RkDU3cy8x5KkSP1QSc5KVKxXedSLp",
  "key14": "3nswrjHsb3SzZKukaD3mFXmKhQzD6ZCMGSpigJAqVMeDKQYsG2TYyNVLMQ3WTfpwLNFxceLQe2gVNyne8MSHR5bQ",
  "key15": "2mypTS3G5ozknsgYaL28VVCfqRk6QMV4xLXSpx2rSWCQQmJ1cXRzjkZ5qzYdBcph2jSXxwL2bNcud8QducdZ4VSX",
  "key16": "51bXDc4oAjTFZV71bnftJAyzvEZy1j6pHaLPGNdudkmGjckjqqxQVHT6KVPFg5RKBd7zxDEHEqH2bEfCHHGD9BDm",
  "key17": "5yahHJXTy9RTU7EVfjT2fhmVspA2rWR8ndS4trijgo5MkjKBsWhy8Zr1aTx77biJbU1VQmafU3CUN7BFW8DniEkY",
  "key18": "2CrkMLH9rxVi7DNkhnNpU3jmF7ocmWCJZb7xuVtj2rrubUfM7duHLrPcZHFyGs67ANUkSayXfaFJuAQhBoYK8tcU",
  "key19": "66i7Hu3jTpvJXWivZnJxVQy3jcSJ4FvWavD7DsgXx1Qj6dto72wP89BgcVGggR7XEpG9aZz72JsbbtFnWVuMdEX",
  "key20": "2Hujt57ZohByw2vuARprD3Z6kqm8rdSp7V1erbkiJBhT3NCDM27mBiWovy3ExKckzJtWWwjhvMNty6BjMaxuQYn",
  "key21": "4VDCTSzGRyQE3jqgbtjke1Z7ecbM1gA9hkV3xQ1NV1KHp7coQX9B2Txg69CjA4omQpEpBwvQPCSBUXL71mmfwaVm",
  "key22": "5om6qty3VhFCCWbBkmbwSsoNGfT6494Z5ccVZ3VFrRYxTpTN9kDNkDR4kRobB6CRzEC8VcVWa9szCkrUjQHYMrgh",
  "key23": "545Qprs6qfwZrsvhLW6Bh2ABCFhHSwcZkzS3pjUXE1ATQAMdhUGQYJWBBk3vu4meixM9uVB3CJkFTvfttxFeZ1Ny",
  "key24": "49J9RVhSignSpuLZrubdbTmTiAuU7gTMocwdboX8hyaS8F39j6KL9ZF1bbi8GSScUwBqmdeuN3MyjgYBa9qiJjPU"
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
