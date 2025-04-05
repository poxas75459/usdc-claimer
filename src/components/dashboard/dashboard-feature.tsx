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
    "5cuwMjbf2XTFdNVqeridDZZQ77umzZPVRW1X8KKesuEkZLcHV9ZZNYhTS9DB4NaEqVsxYQs9154HKv7nKFZb5wDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fFAGXmQZRGJHoyvQGR8SEN1pUxak8CELohNyZA3w2YbvoHKfyy9PRdtZBfqPfGTdu7RZpRZ94S9TgrbyabZVtvL",
  "key1": "xAULgbj9WD14xgdzpkJbFSLQk73Q5TqbdHDatPzvoFWh1dueegjp73iRW32SmevRdmhNb1wMATUQkwoJPjU4Fuy",
  "key2": "4eqGJqGE6rcfd9739yxSEdYkDEHgzDhwzwAG8waP1ToLexLuidN7cPi1nUrsnxCdZUHvicpQgQznFQumhaGsyeum",
  "key3": "3mTdFkJKWUQo1mqzc1sxPqRq4Ujr32WW34TbRCwu4C542P4G6XhkT994dfJhDCh8mdzbRtzmnBugEdpkqH1kkdo4",
  "key4": "3LAPEMN2v8iYX2JHCLFg98E151mp5AFRn6BfDokiMDVZ4SmJbx7wgCXDQE5FtCn6gT6QHbmcZmuK2ba4TGjZwjXA",
  "key5": "53xbqdxf6QgRGAvRzbYPkXMha2JMUEGktySz4oU17kwfGDCwj2yj2F7ax8zGsqhyDQUF9cYCdxfKLPZjRyiN8ddD",
  "key6": "2oZuqgwyZKY2dwjxVuf9pJGWmvjdFHcz8Zju53UqVsZe2MhCgxSH6VWcSUoEYsJQVC2Dw9PozVnf4NyXtSQfBRtg",
  "key7": "5DDmECNiXNGs5cnKFntACUxymb2tmFwZnxjX8TKLT1YzvNks9o8spasVu1oBN8CQWkAtAdCQoJ1RWSjURypk1ZpC",
  "key8": "4Qpyby7GmwFrizxBdPFmpJxzUtAxKmMD7ovJKy2iFpCnqE6oSGGQ6vsYQyYint6cLJZw9ScBuEMJeL6NifvaMsYb",
  "key9": "592gG1EA7RfUU7CGu4avDMKnpc4XV3GqvptNM6ZUGJE4qVPsCzxkxQLqv2PoxSpTkaodG6LeVYyTvBBq7KowA8gs",
  "key10": "4hWxRmFXQE8WfcXzW9r34VoXE2bmMRLBkqwj5aZjMYQMpFGHeDFq5LMDvrxKWUY5fC5KwNpbim3BGxcZyHvjZJ5e",
  "key11": "25hUPk4NAtXAFCJ2mmb5gHoSKk7zUL4aXnQsSAfXpJBVpiqzuqGYLha6ZsyXoNdsXCywgnQCRXaWin5zBqa7gesy",
  "key12": "5Szm98m4gSF6ktCpWPMidHhnUUkyhNer9oeWuLoqPRQeSxwhk61D9T6MFCmtTaFMWrPUva2xKg7ysgidc1NAph9S",
  "key13": "5Aw5f6LfM1u4JYjoeA6vVdyUVgoyAUNYvLkt2uQLjciFngWAWKeePNoVi9nJNk3ipxfRT8YucPPGniwVQ5aM5qav",
  "key14": "2xf6c8PaGU5YCmQxJBwhW58pVdGK51g1EHYwouJ1oUGXZhRogYEMGkdwfAwQZUSGTDGf3Cf5UeGfrmQoc9y3v8Wi",
  "key15": "5jvbB4pJEWUAxKHxZtH34SK1pyuxeorJtUeWyYFBd759uqHX4Td4n41DN1dUN1v5AeJTVvXH3LFrzPvZ46xVuLXN",
  "key16": "3PCErDvoNJHvN2XrrfZ4R5jvpLYR3gQAXLsriBTYxURQUicCed1vMi3of1jP822RwnDjrwwLwxMKk61CrmPxweNU",
  "key17": "PK3tsyL5F7VW1c31tEPtK7Wnyk4yBpsdpVeoRJ1UY1vcZVcVEKBGHFFMCFeDoLhhgLMvw4J1Ls4EX9dEgVFk5oE",
  "key18": "2YuTvscaFPgwpjtnCGmw78tKcSCkJhoohLyvi3BTKYrw4bU6BZ7pVdxD8JnQDctknLB1fHaSXtdFavhmU3WUY6SQ",
  "key19": "3g3zbVRphiVbz4GdTq3dCdECXYFMtDaxyu68eGdsWFT4yGwVhqS6aH2aQ8J8p9G2Tdn7hq1Dd7BCdHW5kiAXPgas",
  "key20": "61BHXSYkFuiVoUJMJrBVcNQjqhBt3aGppShDeKZqZbQeReVPgnCKYpwnrKP3Zc2LkfGyamEEDDpQTVCtarx2DLDp",
  "key21": "3wvdjbfp6jvYcfWzmc95pRYkGrmHp2CojiQve8X69xxCxETN3TFGDwBb96qEteVqiy9BpCmuq3cJjFaviGKdsh3",
  "key22": "HtRQSp9RbJa3t7FqkuVom4aJUQyrJnWEfoFqGADMXc1DNdoGrEVTpR4fwjgtbVZM22tzYTcAvnDqrj3vr4maFtX",
  "key23": "YuhuhVbMLKytQaZLPo745VCZ5hFj8sndkoBzzSmWYw21sivVrt4JnWoorQ2SZ4A9doDzGU4WmA1x83Uhgx6yC1w",
  "key24": "3RVaQD55UAayB5yUjV41nnnFMPPoMFMQhKExnw886AHS21EvTzkzBcEpCQgJXiYAdpyBLbR7Zvm9Tf2fuDg5ckpa",
  "key25": "5C2LCFYCeEihsTEgcbVBKEj81bUsfBABrencMgaFGxdSRruSdTY8PR1QTBJfeHJYb7Yc3WjRumXh4gNHd6M5cShn",
  "key26": "2cWKc7cY7c86Sv5xzs7Tyzqh8gXDDpeAdhC41XfYLkjG5P4M6WcbGaHtehAcLYMPPy3hKc3Q24Y8DYXfyfKhCqPG",
  "key27": "2PHjPjcT8YcMa5etc5oxyYJdKGgSBJNw8D39NGGtWiEWDAutv4pYvFcgZFoDNQjZ9UJj4MRUWEKcVN5ChdPJHYU8"
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
