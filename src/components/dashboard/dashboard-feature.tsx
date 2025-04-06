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
    "5o3oZ49QjiXdDYHSrN3wqRC7NPERUSEsmjbi1rY8xnhPZcgX485tAXiCwzM1CTVREw4uV8goia4bW8C1KSBvz3RJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PshyknqcE9EUKdQBKrKBG5JJFYw1d33tRYP4BnsAhSg9DAYkRtehLS7Q1AD2NzocGC5M8Aevqb6bADakoUwg9uN",
  "key1": "uSYUhZARUrT5dxhcAtZ4Z84pSGkrbM6o8qYVCpXwvbScBVhio3Tx2DQR5wFAw4ifhahBtzdwrqkeLUAMmyD3U7d",
  "key2": "38Sv2Rpfcesw561DpDAFoT6XbtKG18ySP3QmvhNLFH99iSeSFQ31o4GRjDGC8uzVAoiH627vZbSmgwgAW3vaggRx",
  "key3": "4ALZ8fA4zsmhv62QL3fk2pad4XiYm5kwX7c28g6NHgBzRjvr9JQrL87HCMXcdLAqNmVKjT4ndm8buemZPhA5Ar5G",
  "key4": "ep18jyQtVWZ4BK3QUNVJY78Gfgv7dijFWR5YGbnY6cihpkgqd8VJThAi1Esi3SQe7tzq96AhpgibiuqmWch52MS",
  "key5": "26abBdVxadyLW6UPgEwtqBazXCz8ViSiQ5nEiF7vzv7DLZkgeu4iawzcimGskk5GDBvToyBsJ9YdShJWamr6Yo9R",
  "key6": "2CM1feVngYeTgbioL5CnrCqqNiS1B7s1A3qJrdsjFuhhcEtSbpjSTvZBPBrvFxotTR4He9fQLxdz6nxZLHtpiWor",
  "key7": "fnTpk4h8Cw9zrq9Q7vFFgyiAEWg2b16HqvPPwDXVwzXTjb9hcEgkHvVwUqcTjB19gAKWyU3rj5NCccHtZRmb1b9",
  "key8": "2BAY1MgaAHm4FX1L5Fjx3eZ24qJ2ifcGrjaAUjm5pEHHJntBCF7dPdLx51KfZjLz7F1iNGN7mtTBUEnAf5Xjt4bY",
  "key9": "5XTvCqA4w9CX7wpJjKPqm21sviRnhjNKCfNEkBMmoiAqRYsPhHE5X3eVfDRETuctkWhSWqiof78tUyTrVHtHwKiT",
  "key10": "3GGSmt1HNo3bcoFxCVRFtKQP61TiRYAyV5U9neSVE7ouTbPqPG9HKEZHpE7E1VtHtLqy3JtEAwVnMqBp5SvFHbDT",
  "key11": "3VWHY2S2MCD86LZRAMnYHNeCfnwXzvyP6Myv5sbvJL7vjGxhLPwBcu8ymUruw23M733EoSDsgbVYpakt6MS3h85i",
  "key12": "5ABrLWmsm4ZMYSjwpQF5PDTmYSGCbYKQAnn9PcqbERT4o3zKcMeGE9pGAov6PkhjeQ753GPgAxhGfuwPunpfjCi1",
  "key13": "4YjmQkL3hBCnvRGV4rhrPpQQCuDdyCy91rnztMttXGQNPJ3vc4sL2omtepdmH8vRDNJJ1tp3BcCqfRQHQ5NQVLvL",
  "key14": "5XB5kbwN5tyQ5pBv8CQ6kQb19pbRyJ4vmpRirBwFa2HjnzRcbetRrxPoK54pfLYFZpzeKWMYejhgoRV136mf4yBD",
  "key15": "2WS5qjiyToYw7J5gwjSbJBW1rHxMhiouZmuKu1s2wQe7Tdo38QHGtxiX4PH2chPbtAJXZFNKFcNkzBHi3d59RnVH",
  "key16": "65AQo8xAMXaqpstcfG8SE1zr3vDQHLWxazaxzqEMZ9w8xnWCo2MN99FMf8QVNR5dCdWLaR6K5JTW5PccnrBvS3ze",
  "key17": "5WQ9DmjcQMWtvgZ9qEG5rZSYyLLEBbPD435HTeqENtTYzJDu9au5iWo6ZbgDUAuiG1FdpAFaKwb7E6Xx9nkiwrU1",
  "key18": "2ByUQfuSmTEEphh55CDCLJNxC5o7wkGSCbXnMuuD2ubZjTAnnmGWfZx4xmAgLtVULiJ93ERXAuyeJkgswTqE8zDR",
  "key19": "3zXzMJSrVKvo7K34nAWiiPTKN1Cd5ehtew9qSj568uu8yf7G9gPsnEiv15wXw2pxmicbkfvyoQ7cM3BwL6BxvAPP",
  "key20": "3Za6wVvJJewH3wYtCDfHmKLYvmwxGTyTBmpHoT9251D5SyNKtmwun1EsnpGDqdi6S8iy2WpPuunnNGFLQHKMJiYJ",
  "key21": "2VymJA3FsSs8d1QqXVp7YXNvzKeRUBTK5HuX8ZJvmDzCC4xW3PQC13Fd2PAPsdGr7B9vYPpCEAXwm7xvcVR4MRth",
  "key22": "3EnhW5tJ2f4WjfezAHgDhm3Cj2osr7R5roJ4Hq7eRUh477TFTcfo3F6QEZ9NrntQui6T5cao6jMqwV7ocDWczfnh",
  "key23": "3coHHgXE12NUBoSNwvwQefq14hnWGC4X9ivHcSgnZE742k6Zn5HqsvACoGz52omwpnKtDiJZE7mQWfSxmCKaLNMY",
  "key24": "2WW4iXRspohXGL78i6thNTMzurbPu3jtNaWCqLgdt5FBnv2opc1omyD69B8NDeiXxVLStGQVbqD4dyB5ds1e3Dm",
  "key25": "Ny7PvqxYKCs6C1eXPoU8mPwyqimhgNhCnjKB2JQQFiPaNTgV5bCaakWrwpLcyUXT9wDZYRDE6nbLMwCKkAyaXJP",
  "key26": "T3ovM7mAtXSpgAHVsPp3DECPu7wkeJibrWRwFJmo1722dgoWw45jdgNbtbHdq3iu1GuX3wvwTW992FrU36QNBdq",
  "key27": "5tT9uYW42meSZfS7qWEx3pSxNhz7Y5ttag8oLbvKtNgo2z4zKPpX61GRQKxtxeTnpzrLqSy91etEeeGrzbBvzbH8",
  "key28": "4SmrUcFnUAvojDsKmpZMgnfTkwz5dRKssTJy4c9w21fo1vzbEMUHAFTduHX1vN7wv64EGxsQJT4AdpQwcxxJgPWS",
  "key29": "4vsBDHtU8pzQTo9tUtTCmg2nrjo5Cf5jq8H8bboBCQscGWz41Rhzd2QBoxJks4FbV3ZM7A5wn2Zdx8CbcGHWtrF9"
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
