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
    "4Tv3Wp9txGrRUaghKPhQgnqQjdEqrdsTXh13yLsCs3rykAAtDFFSBu966fuC6ZfZTYogbC9CNYN6rJsQne8VvBEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CGNufghpWScwzf65fVSV6Yx1W49JKeYsM79pZ4mSib1cpLk2cr5cfnsvJvnhNmiZawm3VwkoWpVymP9Ey575Vdx",
  "key1": "sDBQK3gELSRHDiP9aq4TqFCVFsUJagCtcukGtNgWXD9zHmhBbJisUXdEfZDcWma9T7AT57sFu3Uj1rmQYkvhQ2x",
  "key2": "43SaCXGev3yyE7SUgM6FMzd3rJRV1xAqCx3v1aavrU5gQAqUFC2cYujo8MNt5Ci9CGu5G5zuMWN83FvA9D83pH1R",
  "key3": "4M1fU2vXuBtjYYE14T97DqnKcTood5Bi6G5wNjhxCvXF6NTgE8xfFxr8kaiy6L76W72PjbZKx5iaMkG7gz7qJvC8",
  "key4": "5rH3ymaCnxftWEscp15fEA7AencMPLiRW6nSkcJHvPJNmJWTQFRKhSEMT5UpWDVjAyFTKfuwjuoE6FKyTboMFsUQ",
  "key5": "61rDYnaFAunbgiLeoqdu87hv65NQgRdN7bcq7ujFaN3VjMV3YMB2GpKGyvWTJLuUS2VBLsMdtjqumR3UcvoFnNkp",
  "key6": "29sZyoMAxSfmzeuTD71RKzizWMVWU7ctDEPnHqXKJtKn2TSXcwLGRHkREsqzLokxky1Ymmg2SnjHwksJtXr5XRRL",
  "key7": "5j3rpxjef1uphgpUZ8z6kvZSnZdeZJJmaypPJggn8p6UmQ2xucdJQPGxMrFAgf4wTvQ6A6kgSXWNAFbkut6Fzc8T",
  "key8": "4LKzUdg7Erv9GfWDQU16DuWtsxkEC2XHq7stWYfhu5psdhe7PmMXgWTwx3MbXCQQnmuVyk4UAw5TUXkYmpURjVA",
  "key9": "yvPoqLwWE7KWHHwiU7vmcr8gpMdkn5YkqKTruT7YgDwoW1N16UaRB5sqcXE52e8rsqZ7jxyMTHMR59sfMK7irrb",
  "key10": "fj38Sjb82aLTSBdu9bN3K7AjBaKcXsgDwE5Mpz7AwdLst13dbznPC2skjKos1G1QosnpDpaDe9CBcBWawJBoHMZ",
  "key11": "4Xpj6DTXGF6vKvaA7FwgbTmDx1uNdb3WivuDEh6GK2PbXvLjRH6F63fqnrAjPt7HMCof1tbY6on1MgPPJbWSoyhK",
  "key12": "41YzsEUHmMVwXaBhsVca6x17oZoW74kXXDwdYLgSQnu1msKnEvZeB6X5ophb4xTzaCNx5bk7tHocgUuoeShjhtKX",
  "key13": "w7zCon2fWMbEiPAByKBWrQsbrrZZpAxYNWPVS4qQVrosDf2e3YcP86fPvYVJv2W48MNWvYunn8nVFLcFhA8myz7",
  "key14": "KHBJ3g4pDrVoQ6vrUPincbXZtP24t3YFDUcDKqWvks3SwhtqcxM8PUrpfGoad8dXUPSBFSjEm2z1L8Tcm7WcUwb",
  "key15": "4Zgi7QqUrxLsZDqtbcsidt2g65uSjyNxhDSrTYh2eSJXcCRoYKfNgsyKT61Ktg4hPyL721DYVpEscHyezn7GTdoZ",
  "key16": "5uvzMumDyVPjaBLUFtNbivdMCh8VmXQWwoQt8KYU944mPwMuM7kiToHPCKNCCp5YZHc24G6G6gN8Rn48SoVGdtHm",
  "key17": "D8uzEkhmxkLXtkk6ee3cnnfqnqKuDWXrBm9HgHc8SzZydBHixhP4axrcfmLhSPnf2DXLKb9ZtdtaobqsSw8mm5V",
  "key18": "NhPCc6yX99HRB5LyL4CUCrzMzLsyMADaYFmdNRSoA5aBNAiFjCBJR5G6cZAjeDBEQZxogm4qop3QgzzwrKKDD7Q",
  "key19": "2ymp2abipkhX7n3ZvjqS7hFn8ii7z6fDZPBzt858vx16SDmJDZF3pCjWswr4zadCscM4udW1jHjGRoWqsCP4nTSv",
  "key20": "4dQ1HQyfboyy5y7f3Ugezph8T56iJ6dn4fiPRmgFTZtELzErdRLXgrDhsW5Ao9ZQPGokiFTYFmTEYMpjMVyuongG",
  "key21": "2Hma2dQh5LVMhHGUAeLiituxYp2nvuT571EMuvNtW9LpBZi5PwreixKYwi6tPw46cTVngbGg3mQtWt8FrC4k4ANw",
  "key22": "4xyfux7MBJgHJWUpDQxAKYspN6kHKb1xCTeZELoWg4NG2h2kkXfeZE6bZCPdZ1YTjitc4U3c3cggMjANqKL99ELD",
  "key23": "meeGKUV8HKsLfoxBM4SVyDdYiK5r1UeozVKCqbjEH63UByWgidKzS5LGJsKUgjVHuooAP2JwnTt8dJ8Lje8G1kn",
  "key24": "3UqzZqPCxypBCpU9Ef2j5mNH13HnSfBHcapviUobCgavkirC7skehthafWHoh83wWLaP324jQEE8CmosCJKgS9Ey",
  "key25": "38o2pZtnwum4vjNgYi5K6MXdFXe14XUYQzFzBrbT4BF3B3UWxnFMgSnDfNb5MojhBr2BYib78DHXENhCd3DRz3Fs",
  "key26": "p1iQPXNKTeeWUpo11qaarWiuAHQRYKyZV6Z2Wr6mb5S9TMsyEU87PXrDChRxfMPhQbhwGpyVF7Q4u9biqhZVncL",
  "key27": "cM3ifP2sHyZiqeAAwybdLuoRs99ezSe3Adef5JWDBDdhykCCYevaqWJNyQ2nutGENns4S7bvRhrxDioNBP1DCHF",
  "key28": "3kfdkyLu5jrQ3kgUKcip12DQzHdsXHzeupYEs898hC6Tc682tyxM6cEkko73RA8koBc4jpW2VQNjTV3meSDsG4U4",
  "key29": "2yP4R5xHvNkzLQyPvBEtYsRv3oDYDTNF6NJWPD5ceDXpoEnrvWvwCHihcPAAjHBw7KYTUkLDSiWhNiV5MBPBr7R3",
  "key30": "315iRSrCEuKECgTVgW5gsXyjnqcNdQ6ZzyBnrxu5DueuGKkvt47rQYeYTPGuqYPXPD6AoREJHAvQPMr3yCAPhiiT",
  "key31": "4u9jUodU4ZtJNzaBpBbDmcS9HMgC9Hvc2ckyMdKSBWhi8wkLFX5QiTxCK4g5YxQUWe63Nt8QSpX8554imjTeqJEk",
  "key32": "3mttvwMfZx12j2DWJzCzHcnhP2Esm8KjY4bqcb2amBgdKF43CsSRVWmpWVg6H2Dc2B9TQbneiEuriFjCJMhnoUSi",
  "key33": "3VV7cNCYNTwdaPCbkeoq84hXbLcd4yHdYVKa5mgb52h4PVnjjrHnFLcb6yNTYPpqS7DCY3osHPFrAzvohWsBRSAJ",
  "key34": "2UmuqyyR54hiJR3bsbHKEgnSjUV2MemgCpppWU5RhqKxGAxCieVGufPwXJ7rQMSfaHCoQRG5gwE4eh2JL9jQRFho",
  "key35": "5AsyweuyHEWWHxSpDQUh4LispvfVexrYE3YyeVizjJrvypjAhp5AxP1NHUohBsgi4ECiCxVxduAs6pScsFAjrHTg",
  "key36": "3hJMKx7hN71H19pzk2EBYubHJectvzZs1SiborGRP5SiNkGqu3LurxjF5XWxQDMuijzW3Ae2nfAdkH9YWsGqq4XJ",
  "key37": "4FZUNWXjvGcs98Am4j31516m9g9VAHa4xAgkCCZAXb8jWBoX5QExxjV2bdCt2i6fb6q8bbENgYFnZ9K1XDssfYLP",
  "key38": "4XjCCfCVSKyuUpis4zHJv9L9xMsT1ueDhEUTEJamgTmRbR9BaD1wyZjcD4xSPtkrpEgeV7xeTwE7CZnigbzvHx4p",
  "key39": "2gMQYMHuJNTPZo9d6VwFYZg655MN1SibSwdomB1Zz2gq7opNgJLjZ9UuVMcgpXoD5hkZxRCTH9i8fzyBJiBWc5Po",
  "key40": "5BXbbVwGKuCju2BabsQn17eaFDHsJUPydbi7tixwHZ5MkWMozBSy1bXuRbsgsUL2KziFUzzzEeqDF6avs1wBdBRs",
  "key41": "51CxzR3jKAxJEhJhfJ5G48N8Y3FZbbavSisxnfWZWFL8FnbSXg1wpyrF2U4Z1RNdWtcbSF3WnmBkuL4mTB12AKfW",
  "key42": "4dksN9ZvEFGxUM447RuwJRxZu7f5EcMyyKmhnyMXws8cDSyoiC73EgrRFZKawjFvUekAryHsug1HwMRH42HHXQTr",
  "key43": "2CEcuq59PS4o9Z9ysiyZda8cWWLMo1GifrAVt6wCfrvxksZQnrQyZqU8d9E4d82ECLbS7wasG3RF745BzC6zDnBD",
  "key44": "3UvffyE73rExm9y1hcvGBjcAfTTFJMMPgWd6Mp1x9GL1DMBbRJoESCKat18tbk1DSG5Qs7zGycyPKRkPA4mEAejX",
  "key45": "3RJNTjCjaW9zd9knjNrSpGoaP9ckEB7ruEJztPEKXNLqNZiGziv3RajGgxYN9HNtsieWXDzQFEC9aAfMQSwxceuh"
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
