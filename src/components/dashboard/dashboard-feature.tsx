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
    "51PPLcuzAYLSJKH1oT8iUAtNhNTgrnWFmCqrMELAzXJ2DwcLfoRWgji8WL4A5ieLpjmcRujVsRCHuyg5e2Rg7jVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KKiCpsxg85Fzt8pZvxdeiUttc9TFDBkKUXof2CWjkofnMEbrjJ7f6aX6EBteeDcYCb6cSBgWv3X5Co9kvFu4FeT",
  "key1": "m6x2zDJ8Dqs8E9dBr3f7swpyH8KyPZoKAixn99Ud4ik1ezUPf3kPLKWsrMrb8yW1aAyg52RABbxCvn79imcvgS7",
  "key2": "2QN5Djv2XzoRJKQriYXUHtguwSFGZ1NgxySimFRVfSXqTKQx98h5cuKHDUqd9hkAkd1dBq2dFePf66VkesN3823Y",
  "key3": "4MDtMwpnXAfnMJKVjCerspgbz4x4nAJ1Ub9rhAezfWVrCggAZujhd4PJ3UJfYzMt8XDHkULZqcaoPanSq9MbRVMp",
  "key4": "HsXqogo8pNtd8TNFij1vCjWNFbfFdBtqkrEVGwCe3PR4teG7AGJBdEnwqLhxBLwfHidM92CkxfU6LtHoeCXQE9u",
  "key5": "44S9QgDMSQH41h1NzGKC3v1f2fsJTmwq8UhiyeUJF8YoMGQ2QzjGurmR6YKBBpkH4RQi63TbxGj6S4py625Rgaz9",
  "key6": "4etMwLHJZgAzL9czN5RhyoH7v2jz5Y8EbhavfYtMMxtvCB6rVFXMnLgZ6p5ApA1BUbZ5M4JrDXFgM7vXW1GjRyJM",
  "key7": "5JzdYYANCqUke2FLauJY1Miw6WEVjBTk1PApTcNJU6L3nhpdYbmZ1ZaR13g3iskMBEWU3rU8re1EWmo2hu6k6EPS",
  "key8": "5hNrLTfwhdZ1GrTebvPPEfS1MQePZhhrFQ4jMYkZYxbPXeZ1d3GC9Bmmw6UGT5NWXsmAh2WwZ5vBKFdkHUahpBtk",
  "key9": "3JzAmQ6VueCrXtsr37jhMRCLG7fnwNh5dwDJBfDchKAwxHxCNEmUCKxqguCaKXhLBN3vnB8jzpYpk7CKQfHzVMQT",
  "key10": "4vGSoHsn4uBnJoCVX6YSXucfvFkqKrkpYxoLTRDa3NtXLHa3bxznyM2c4aN3VptNzbBqkVdomdjtMPHbxxDHS6aq",
  "key11": "323ACDtaenq32zKPfUPe1U4WWivvksEu8gesbZZckykCr2SEug6jHnqpPsc7KP7JdhJpwpoLqXQbyi1PzYZt8zdh",
  "key12": "ucNPkjv6RQRtAShNzybC8JKBgMsf2KqnDkKBKw2JK6ZeoqP9hrKEhF1K8Q7XRvYTUT4moEDeZ74SoBTJ5m9dvHe",
  "key13": "214xeBocQpciWirXMwqtEJ3oAdT5EBuEj5pouHRt7ei55UDiUkV99QeSBMPzKCzwxeKoPtWBvYLnQ8V1hDKH3i2v",
  "key14": "3i1aNLV9APG9YXo7vzKSEKquRGnitT2Ynbcu5uoskKpn6dEwXEUrrjfeiNLuzjL1PYrkHtkXiAE4Zuv71VwYR9GA",
  "key15": "35bxfZGaFTN7BEsVuUx5HtnyFqbXJjeXofRetJS751TmVNCqXJ2CdNCne8LowqPuy2reDraqpTW1v76qANQ7vHNN",
  "key16": "21gPc4KGkJtdcrB4J12cuDAmy3LDy9MinyY6oGwpQz2vtnXbLT1heDbCX6G6miwp6BYjDUZ1rfqo7xquFA2bT7iZ",
  "key17": "5pBsLMRF7fNcQHXfnaPWx4VSTjHP7oRGwuoT961BYrYSKgTz45PMpkSK2PQ71Nxpm4DuQxj7UU7iomQ2NhHAFd5J",
  "key18": "4QtmzhaRwCy5L9eKmP7FidTRKmGjQemLF4YhQhwzKP4ARWfJCwWFySznmBiLApbM2TjmVPK91rKeSGvgZwgpAYxE",
  "key19": "d6HxP4XvtQpBqbGxdd4i7fvTyjTFFiaNqXqym8ZRxQuXk2nSPHNRSyBVBTKynWBVZ5zwtEyeVvvnVUX6MPcW3ao",
  "key20": "4Wpbm3Rh4qXV3Q1XBoni6J64Skb8jTMWRve9pBoVmaA3FphZJn33JonYR3RcGJMw2bDUaXb6ufjLXDzKkNG9N5Na",
  "key21": "4CS4jyKGUmHgpUT6MnjAGvYPiuGsQqvQyBUpUTMa6hZDtyNrs9E5FUzVZK3WZE85VZttoHHcB784gLBotD2ug83C",
  "key22": "nNPm7ZRAPqeNXoGpaYKpooNoWDkAnc1n9ghQQTuUCzyoZQnuZjNPKqtGkxEW43Jp8T1UiHwQ2iadANsY5iLpLvv",
  "key23": "2yo78cC8NNXpaRuz74ENTiWc8yw2Tq2tTk9Yiq8taz23SxGMKXT14K3KiQ4n9hhHXNzUahqLL14zLJxdF1VTVCdP",
  "key24": "3pn4u66ZHURnCumCd2iaVAXErg6E3hfqX71YU2MPF8maws51XERNCqy9DHpgTyA1mCovDKEPoh8QSAUDCWhxa9TU",
  "key25": "5anBD6rjWnxt4JD7okFourGy9fzDyHmTpqS9X5pA9C3T3eXAktWjsn35BY8gvdWDveQNDAj7NdeZJj2k75bCZvo1",
  "key26": "4UggFwiDQkzBfySUnDT5yirK9oNQSCXNQUvXjYxVhsRzGN1FKKkQLrvjksTGDWX49LZhSRkekKivPyAfYgyF2xFx",
  "key27": "4ErKDCK2u8GFvDmcLz84CiJgJ5PWerTM4U7Y5p4hHtRMeoBjFbKTkTjZgegSxMnJjDChQYjdKWBtTAFuKMYzwqJV",
  "key28": "5R4r9yrC6ehtnigV4u1pg1a54U49L6GapPunoqLCAzqVgWk2BTJFas5jfEuVF2igPBjK1KdGgFiyYVRBQSPh3FJc",
  "key29": "4fkWfgVeTQaLuLPsoN2G4NLNM3Y99fwdd4dyABSeTWYKgpGv3cfD6yvCU5G1miK5obx1GJT3CBcuNfksQQmkjF1L",
  "key30": "4VFrd4ui6fvG62QRBMzqmmgnEjitCV5jmdxqn9qdKSJFWZYVp9puenfPcE2n7yB2y8YhCH4V9277PSxpjDAywXLF",
  "key31": "524REMeA4nxEdvxyd1NgryZMJtzZfsjCpfrCiVB7RiNGVPWrSNJnPvjvmETgV7XjvK3xnbscWMwTpMpSkvK9SMZH",
  "key32": "44WkfH1JuukHeeN3R3Jh5kWC5k78EcKDNSAE4jcJKPCiCeEiTrgC9PEPkkCrBq6tkgzBUXhpZrr33BbW1v6HYbXM",
  "key33": "tUr18fpwCQ7WhdSkaymqMDMKYkg4bN9wqrKU42uWnYjHg5suJCPrxsHAm3aGavqu5M5jHgHAVC8QRKjQ7x77Y54",
  "key34": "396kCxviXwAKokmr1ztcPaaERKaFHTseRr7eGUubg9wBBYrmeNfXHemovsTUH9NEpdb4DtV3Eu2NAwjba7JEFP1K",
  "key35": "5vGaZy1nWMWRyZsuoSfZdqxAr1kAC9PkH1SVMPFDQjyzi3Z1qY2qSL7nAonvokmDGwT8aUz3v2jWsvLPynmYWa9N",
  "key36": "4EnoZc47vEJhueh94ywpMmYvZPp2rS3rwoEx3Hyaiu2HpFJJiEaQ7sumnhos6zszHWdrfkj4SFiai1LYpYn3idam",
  "key37": "2o3JzqDsE2h8MXQ8BDUvqKTKsQXzVs5prM4wLWu5WV8xbPxvbEeSjGMpkRrC2vu4sbNfJCD8kPwW5A5g6cELKyVq",
  "key38": "2NWzxVaCSRzUg1NWdbgSoKYCopRSM22oEqtcrU7V9uAnFeH7VK9S5TWoEFqTTmuwEFXxpzHBuiurtHhUhQq3VtCZ",
  "key39": "5TMJxn99DBxW2o5enNjrqeQYnsx8G5m4wXHDseDmAwkFxgo2PBeBV4c1tu7gwmAFdNmBtYyHa5oc7xfF56AwTFub",
  "key40": "36Ve7u9eGrRUUeSrVzSv43n7hZ9TSNPkaE2T9gq3pF62NCq25sWFXg9T3PHacqvJHHS8xz1kNgLDUNQtdSFrQejd",
  "key41": "2iBKN4fAhkQBwG95uBauWGBzMBmEpm4YftNs18NiRMoEg6GReVVJqAc3VFE7BD4Um1Qbwo5ZwyzDfxh91jexuZBC",
  "key42": "2dk1ewkgjh8srfmf3jqeVDqx7vdtJQrydkLKw3boBd2TAAksytMCMKYTsAboJ851dkc6kgTYrHQQKAXsgCKKy8wZ",
  "key43": "4tctJdgg2AaLQviXDfkU4uRYWz9bnC1rgii9P6P4M7twvKKPijq2bNG22ZXa76ExdAaAP6hsPSsY8sm7e9byj8bm",
  "key44": "2HRxgDqAQGMKsmKQcEAhmiatdD1BNLjMLZ2QEEgimEVZteUC5TLa1MRnGoKiNfC6HPpz2cdQsCBd4PMoxkbxUpxJ",
  "key45": "2hdgaihCBSSGtsLYtMANjw94b2nRjfmzhKGfeuhALuKpkYSqwGTQW1zW4N24efEQccBMdWuvcmTHTnjsV4VGYZs6"
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
