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
    "2Kq154963YLL61XkRRvfGpSkSiM55DNczjf3fHAvapYvaaUfKPquYouu6S5s5zGxEJAnUZSuDUXCjfR6JkavYWk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gj2ScvG4t4PWKsbZjpTaEUuiwaSKpx5tJS3CnWmDLBbFtcjPKtToDWvR63rHESXhm8BcZQRRVJuRB4tL9VYPDsh",
  "key1": "5LfxJVH6gLnXHcesjqmLPa76g6utBYDEKiWQFJRV3fC7DrEx2zG7DK3qcbkwx56W67Xnp4ssLdn4RbVmY3intExo",
  "key2": "2YcToQUJJyso8auSvi3YqKAJgv6BfgKQWPiPb5qP1a8VXPAwp78KpnsAQMjFziProFYWQgrgaeQvPL4atxywAZ7y",
  "key3": "2Efem5t1UCrFh8KfwdiTzoiiMya1jq6isE61uULy7Vk3WESgRmpAnpE2CJD8j4oyHAwSxBaGXLX4rnSBXDgk2whE",
  "key4": "285FzsuCiXzg8QFi2VoZSn31mTMXSobRdbCP275Fox4v6JM3qSYUGHfZkwjC4vKvimz2nxkA1PgaEzyLqn5Cp4a9",
  "key5": "4xic34m1crj4UkDMRe4rdS7mE4h3PLaKuMeoCTkZEY8jB9SvXcpT5N2bCmRAy8qQrq2EbPaZXGpYBKEHoMeLeefW",
  "key6": "33HUDoaggb6cNj3B3A53CLEq4Ny1aANgTPu6jEoPKog2VrHdKTYDkuEcBYtme4ZREAp21p2HFX2S14FXGrHAdRmp",
  "key7": "2JQoe8QGtgKen2282UsDvzkPFU89ZpTVFeqzZtMWT7om6oUUK856nXY2XP6yVeJknSJbi4a9AkPFGxk6Te9H285f",
  "key8": "2SaobuUyagjAfwf7RmMBpZ86RBCtHzbFipz7pizgPF6vNXN5YcLA2ohujJwKuLbwMcuDUeLA7jrAYKLSDr9Jneyo",
  "key9": "3mh18sB6Jok2BpEUak8mQS7j2g4BSGWzB514LaPic8KgUQeMgZLSmq8uyM2PDbmfTMHEiJXQw5qVkw6yiUGNFrES",
  "key10": "36VP47UsCLHRs8TAwmpvnYvCHGZxxmUvGqVsPYGZmMaoVGwaWRqDmHTGC9ZFB2Ph3mcAJTLstZ948vVDAyanMqGU",
  "key11": "3N7mWKNTKSRE6rP1LYZrQQZdF4AtxwoRtNsrv1R8QGuXaoneedN5CMUSKRY1iYNAXfMcweDQuWbCpov3Q3oCHSs5",
  "key12": "65jSXX95qetodvPux5qZKZucUxfR2YUM7821pUEU2Tt3bgkWqQanBWMhBrh231Aie2JFfzZGRaNwRP9TK9tABU4j",
  "key13": "4vJc3ftPPu52aTSyrrJPUkyxG81oqbcGNWhP3XLMSaQS7BvMkF8xSEgkH5E5qahx2s1rYG8arg7srEXYwLGKwYH9",
  "key14": "2KMChj2CVPVzBWdhYkWhdc2Ap3bFuKfLmbPQV8qgmCTAmyUZkt2zx1RPQJNZVU7Xye3KNA8gFALYQm3ojNuc1c65",
  "key15": "3tsLkPPeQNMp49kSZmDH52k5YcZbAKRK1Ne8h5u92Di8Jhq4fbSuxoX6EmbPiNYvks3zVBJ5GpbUhAYne6J3ZaEK",
  "key16": "4XKLyFayQChBLSzqZhD5FbHoUxLzcLJx39iiwrTA4EY8SYJfbVCG53b7JRm8jcNczUWLcP3NPB5yUtC26rFsbeoi",
  "key17": "xkhbin1WXbpNT23DHZv1UscCAnsDwxh2judrRAQCdc4H1thpS1ksQUcL1UAi2csPiET1TmJh42vnnqGpNdPD6jY",
  "key18": "5UHu2SabnFvstFYBYeRd9ENTtwRAzbJ38pZ75oTqY5hwFugqXmKkxC55VbKfThcGFSkc3mAre1TX7uH6S6DEewrA",
  "key19": "4XWx25bLhNvEVY351NCoQRgUfSngE7UoxdscCJ5MqZoDnsKQLigy6r1qkcUdyQK5wzXVH2UAXr5BXQpnNiQ8UdqQ",
  "key20": "hfBQWReLayWoCKGg1jYNNqHoMTZPNvLkVjAJ2spUKuBDmWN6wdCButonCNty1M7gYKvvAJmrxGHFWUnHSA8vJqf",
  "key21": "2zsh3Y4N8pfx4QJnkuJZFGcjgBqYNsAGYsKWiEnV3t1fiwNX8fBNUgjFF2wa3gZELkre6bKCgAndQHY86QLXuCVV",
  "key22": "iS6Atc1j3d5Q6TrB256H6bMPKDRtfmbrjaYoumYSY1TK3xvMp7ZTrZRR4cfwf64PegNQ21DiGHsmLi8XRmGvajx",
  "key23": "EX4g9TzRrh8VphnyMJLnC8wAnoniV9XxvLe3asCJPmjw2dJJxa75C5kr8GWEXJWTtU7L727bTZYe5oHjV6bXWJo",
  "key24": "66q2iDKoAUynTp8acrCtmjxAV8HoyuJncswFZKK2n7mWxgSFHovm1aLDuVPK91sqow4GKhBd1YomFXG1ZS1iG7yR",
  "key25": "TS9oP542ZzSCv3Nn5fTriD8uXBmffcA3EatuxihhbXdPRVGPbrFRQ8252UPQTRJHHTLqoeKv7ismGYsdoUvQDYV",
  "key26": "4Dxp4ZvPLKAadeLzjQ9swTDXZQNJGST7fS15YVjroB5urqnRYGnWZzw2aVa45cbizBxqeughH22tVsJXzyMgknqt",
  "key27": "TbJPqWwFVsLrFMtW52yADf4kxUuMRmfo37BviyLzHTVFmgjrnqXDNT5yZMrNok6Usafa8YqUMYoSqKS453AZhon",
  "key28": "2P3kx3wpUJMsrNDBbS72NQkF83QcavXAXCCDtgP9PnzKJCEDnD8fWnodMnfdd6caqp7JCor6Rme1Sj4VzaxRFjRA",
  "key29": "4wqmybzXnHERqCEgnhTc9uzPYRCq847n9CzZpzpHV2Rg2FtPNrZ9b2APRB65eV5ANWWWMhcK8iKMa8mGwSmk2F8Z",
  "key30": "yTuePbi8HWQ28DBUhrSpJdn8rURNUoY8hJr6UmCbnZjGHL5HietibfjnLCELgs9EWAuHioHm6qsmHMDbbHiVJpd",
  "key31": "5whB5ieBPAE6z9K9iighK4LqFJ6n1p3hDBXnU1PD4YZYrkrb3MMRWxnQMxEwjf2s1Thsf7LZtQ2RxrEakRSM5qZn",
  "key32": "5pkw2QerxcQ8pVqQbC424oFg5AXvNq74Lc7XAHV21MbdvPhy7uqeq2pzYkKnC5AMaBMviVDcwpJxqTQ8GDBooNdx",
  "key33": "4E1t2eWN23z3HmcY99Rt5znmPshpMqBdnssL2FJjuxnm3BCk4o6iEvmFJUTnS1FEhDFpzbwfb9ifLvmyV91VXXA7",
  "key34": "2mhvXpQ6Ur4XzyNJHSPcxEA6r4cSG2CW3YN7avnMmNuJEMcDaAgVvfvPuEvdNJ4temCEdkau3VTRUXV6XcsUhwkW",
  "key35": "4UPmwFYk5cKYxtaKWb6scuigbQxZgADrpRBnn2ophceRNpNHotRVybz53kyNCec8F7R4TEDPabdR6pb7CGxpuA42",
  "key36": "4iM1j7nrGg1mYcCFS1Xq2MpSb1R3dntk29h2mr6KJLku5WHoCqmYDZb7PWQYrVEjMwWRs9Ksccs2bMG1pV3TrjXu",
  "key37": "2g7QUzGL6QTfdeFGpWUjhtnofRH39UCrNt65RgudoT9cfD5gNtzE2dS8T4UFGrCxbqrkQHphnL6qRxdNY9DMZLTh",
  "key38": "4syZUahUgk5yCSmNFwLZnpd2HP12oxshgZE4f2ShPdhxfzR9KeGQ99p98wJ1m1nf7RJ15ruDXigNX9QtTsPWSYKh",
  "key39": "3fh266HrHhK5Ngn8qS9LhWX1Yd7qYgeABUGWAHzeRPJx6FHxyWwk724cKoDcuu11LPFbLEgj7pZmXVungBeAmb71",
  "key40": "2LBQyX9CH2YH9nYHtPapjaUzLMWJApxEBjcTU2EoR7kYQ29vhpdidZXCG2GvZrvAkQV9hdwKXMYmdTooL9vk4wig",
  "key41": "xcqEVhKh3XLFDtV2PnFPUFe4UWYtsXds18Q79vjnwE58zcPA89bEHVkHb6XgkHRaf45gQGT8nEZ1vuzEgE6BE2b",
  "key42": "66ReV9XJhHWq2FRZrALUwLS5tJBkt3JxzkDRhkHbgTCvV9MoVKPM5opCuAfVHyYqzfF1cQ2PNaWKeEJFSEYzjb2",
  "key43": "5y2as1VJWrTnFSP1FepG9adK2aDgk7bZqXp7DQt48QKPuhv4Mw2hLpwaZrTQYx4nEaFnTu3Lecd1pTxKw9wWWswG",
  "key44": "gtM5nKW8z6MgjbVXJrRAYb2JRrEJZupGJQ9p2pKHZJLwaR6CTTRPdFKKbTibBzm5oAsrYv67GL2M3ugYLiisMmv",
  "key45": "4gDhjGGyxrqLFkbzZNj3YKdBdGzVhY8pXwPCGesffxP9rPdiQv2zeGvm66eDo2gHSkMXggryAWLd9BURvybnUcWF",
  "key46": "3sitq7Th5TmhsDWtosKA5dCuGhpXwtaPtqUzWJYx9EpgXHhgUExz5dwuabNGSHpVXtNEaor63CBoLKc1t3b7eyiv"
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
