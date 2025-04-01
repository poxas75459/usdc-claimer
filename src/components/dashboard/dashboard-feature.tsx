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
    "4swL3kf1wwsWdhW7rMLnp8p7fZPT7db76p6z3UoJFyeqGwThvRWt4bbHx5ye9dnbmfQifEBpoe6PXBv3uikXshGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZbTMtvQuSyfooBNwXXfNDA4bWNwm99vfVfZhHULw26CSEDQV4WPb5f6sr5rMmWwryQRpk48pd9vTrzZDWE3YNB",
  "key1": "5GTSZpGJoELPbHf2TJAXizkLysyyqFwPttDpF4a3JHP6huUNfGcZa7kZepKVG71fjBT5zEEdyrHGX93BJgmbpaxn",
  "key2": "2r5QuKPY9Tp3B6FKgDP2YzrM3ow4cPTQUEy8epp6M72agd5J9TvVSR8rwHeGzFCjy2FLWdwbvkGTdEjc8iWZ8gHj",
  "key3": "8guZBzuiXvEYbQ39DzB8cGphDCWxCdZfregGbrxktMaxXbXdSEurPhZHooAw91jvz6mWQNtGEBqd9GEBaBiubWy",
  "key4": "Y27oSoaCM9gdQ6WDVAyXfZmmRm5CfJJn7Vn2ar6uZWbFiTm2j52Hx34iE2ShnhERu89mZEbHhwXLHGZSEf8h5Z3",
  "key5": "2btJFcH2cXLNCMvAmWGAjE13ad5gYSJngW5b5tPCSCieZuP5b7WN2fFwJt1afEYk4AbR7t9Yyu4moTVtSs9X59U5",
  "key6": "4qC7tVBCNv1uf7UzPC1QfLmZphVLx4dTgGHVxsqigR9bTJTzdhwQ4Jxy4PcKpHTsSwVdPCMhV2WscDbAHFLFyGfA",
  "key7": "213DDpRYNG94awedwuZNQmS9128E36MyGNLk12ei4vVbxhhoqnZnJp3DrGPVWw5koihcuvQgLPwtbeQSWka4tPEU",
  "key8": "Pdc6y6NXr2M5415uCXL5xBzyS5SSwmvbntdaWHBeQdQusSXvSwiYKe8WRcqKyUxr4f3LkVG8Gfr5ddQpYbuXxMz",
  "key9": "3yg2nDzw2pBi7b7u8VC4oHbrq5MUzRAnGuKyABShPS7dcmoSkKi4rKofziPwzxqXYW4V7s8cDCDhGkLqPE68o83i",
  "key10": "4WA7L33LnMKbqnujB6nBmu3HMq7F769p2CSSV1KJC2AaLvw8dvXv93sMihCSEpnJxP2Sn5d1GGP5D1w1mC3NabSY",
  "key11": "3xHweVhoyX6UpHxRYyQFuPxwMGsB5FST5bWREpdvaS4tWY4XfEKAmf2V1E1isd3TUB7xi9SyANuv9EzCzvNkx3i5",
  "key12": "tu5ZoYVnfujagLaD39KeZXKt7No5DK8X7wAfbD1911nYdcdNLG7C7ZsK5zRWK9t7C9CjKbsyX5JmrAHZcu8KG2C",
  "key13": "3NpPQStsde4GF2x4TfegfNaiDke5KM6TDdGeJN5xMr1b6VYG75h2yBrifiDS7Y4mvhQM21qYGHNnrwRbJ9Pi4Bjv",
  "key14": "GdYQCkuXma4mYyh4KJwTooBANBd9Mn2PRKgN1PCg1zRyhncJmmncFetdCEXzmW2qsBcGBFcx9Am2Zf8uci4Kkxa",
  "key15": "c6JdjQNwNwjf6agaGJAh8VbQLjBf6Nyor82YFyS5ax29HdTxEFpJVpKqbB17m6VSqEmjHrBKRx72uj5eVKRmeVb",
  "key16": "3tAwUhcf35xamBJXdGSkiXBsMXtQMoKduk3BJAiiLLuT2HTE11Uj5WSgxdRyyqYgTRsame23JNixj9TFqsWHMUXz",
  "key17": "2uARSpDJv3bYxZjf2jVkJvXktPykSK1vyirssJ3cJzk5ir6jzSa33rkmBPjsTU26Eir2UbyrynQDhhrmXiGsEvPY",
  "key18": "5sfvK9c7XS3V6YKVihUVUgcGJmJhqLa1qk5B3UCoaCjYKyKuJeim3JBebFiU8RZxi1NSD5Cvuv3pZP3Z8wyEZ6eB",
  "key19": "3UQ59zVhewaqF42NMUnbY13mpek54dnykEPzZ4iBWC4mqSep41YriMruNQxUu4ERuuoZD6QQLWarrQ71ucBr2fCP",
  "key20": "3WXHXVwoCRURZjnVtjhiEqVDNREVJX6RjTPRb2mfsKY2huy4HeDgHZpsR93iVkB6eMjZab2z4vqswPGBGtf7xdzV",
  "key21": "4ULDX8cLwc4KkJ1WG8ydzVXXTR32c9LZFxdDQxmGqZaYwch6BTLUo1STQnAJe7vDea5WUw7qPUdAsw9fHm5DYgZ1",
  "key22": "3AZzGnfujCg9GvJy3yoEyGvwaH9u1PR1HobjAiHNG9bdF2C8521TgmuVimEoxRDk8aydsfbi6JDe2MHiiK7gjUuX",
  "key23": "2pYnEctyPayf5KmFd5rs9YwFCtbBAW3XKy88zkwYDePUcF7BAdfGjVwi3xYHFYxBP1ss61oYV7KmRRCUjXnsYBQD",
  "key24": "4P4NwGiinDJ3Ru78YeE79sUtzpkrTGnyzythTytf3RUtMcyawwwjfePuDAbVvh9HoLrcovTeCi66oArTTAjQXZ3L",
  "key25": "5LwAReCJza4W9QXbW9y86b8rQkXuuSrJ15qunAfjuYMjL48849hbrseYzcDw988wEx6SpYTWiupFw2dcD2jXx7P6",
  "key26": "3Uipmd9UNPhB65u3tyyzp3WLxHwpkWcdnRKEpmD2LzxLxYfKh5X9ZkXdj5NVus9dxEC7amme4mjp3YncrPCcyuAX",
  "key27": "NUrCsU3WrNKf16XJtQnungGT3weyLnaNfmbN8SfepVmxH9L5bps4VfiUVT1MPQRnAbP3kvLPe38xtLPngPV6r4h",
  "key28": "2y3cwi5HcTn12axgqrA8gSY4kbHDtSQ4Aa2SxSx6YHqFxvupVX9tTApGEksK63eHnab2PkUa5L58UwFtuKuyczhE",
  "key29": "urA2uLSyQPrvNmqDdXFBGfmZgvWjJz4iLTmo2FjyHzXmPvYGpiJbuT5EUBmXadN8nG1qUSrQSVWb4GLF25aVirY",
  "key30": "3Sgx5mtJNf8CBi7KCuYqG9ZjvpDpVd9Efq4XuaCBF8ySydNXVH1tEobTvzZrNsyRK3QXX2HMRghYCcxovDwPPxcA",
  "key31": "636EgrX47VvU7QgZS9t1NHpiSNbJPkF3jM8mJWjqLmsEYMRz2T3aPxwvunv4P37ow8nLHBstN6H3HpnKsqgpvHH5",
  "key32": "EpEA9eKqTapEgVfgJPgpMchGzqMQDxPTCv3xFMYcV6iNqy812cMzm7YLBRv9vCxzWPaow5itSC7utXWEhtAhybW",
  "key33": "3sL2d6vAq9dtkJ3ye9kMunYL1WVTGefMPhYP7cs8pienMWbwwogtW8gLpn7zpUdCV33LETTvY8TmKRGDDg1jKxg2",
  "key34": "uao2EVmYYfASc6AJB2m4jTi2cZbxy3LWoZKt1hDdji4Ckdc82YyCwSRBPukR3dm2CDENUcz8tBty7V87v6a5yYT",
  "key35": "gyMG6U4DZAtt6UGJ4F1EbEXUwfhwvaKA4nHcRber1xkByF6R49tozrknHH6E24x93ZcnGYadHmCrj2xr9iQVG8E",
  "key36": "QVvrvoqCs7XJZNMSEwmUBNbonX7zLQyhE7sjPUL2c1DfxNzE9BZFiQLdoQt1DBpW3xF19wSVdSpQx1D6H32RRft",
  "key37": "3kdnShyCf55hWXC88hgrVjMrnvn14QGKvkQtD4wXejtUoq5PtYu4HEGYYY9jhEmpbmoDct6bCFpkwBGMiYB7Lt1R",
  "key38": "488Yo5uJZtYt1jxhuoM8LyVRSQbUARaLnmB5ypoBMU73zUtnLLcL4zmANnFwKvTJ8B85fTCou8EqJNxFmwhdubrW",
  "key39": "ZA5uixxj5DhNHnbMxtZLtmgajf5JUAce9P3mvut2T5harEiZF2N19uCiXHmGH9haguA9VwW21kyKJi9AoHqPpa7",
  "key40": "5Ab3yj4C6TTxuD1WHjDRm5Fy592U9egz4Q7dCAbm7c79wd3gzjXG3p5hcGwXsMf9TZymoPwcFpC4yvZuaUXHa1Ty",
  "key41": "3iAWAGaqKzi7rQbKiWpy2sJi3QMSCfKvjkp2evvMSJjyP8WCy7zJXCU8DfCLYCcaACQNkJXmMiQVxiBtJNv2GTik",
  "key42": "2httnupFjpERprDud6DLeqP34Qtuu2yAKGcrxKaJnMdPJo4KyPZyMYhAXNUrhZr7LS2BXoiyK2rd9YozngC8Kq4B",
  "key43": "3izY618rK1VkbmLRAMxPPAni1V2dDXvXhoeDSh9nwEQ68ZiXoFn3QimcBEgdTdXMjpqA27sVfgiTmGQ654zQ1pru",
  "key44": "2ND1XumoULDzGQPxuPCgw6m3zocQhqUdRSHHwnC55UAvtazf6xNwj6RwWe5q7Yw8pcDUrTKFVPzyQedmbmm2WrTt",
  "key45": "5MXdHbBTsWsGhCxaAvbgYK5aDpo7dkyLdtrVaipEUB5EfurCECvC1hc3v9iF86CZxA7RHGqSto57zHxXqFwZFK5w",
  "key46": "u8j3W2CxpajdgHWxGBiRv8wj3VD9p57GPGoeKhFHYEY3TDmUYiwSJCjoRVbGskLeU6D3RedNt3xZKgKSiV87kUJ",
  "key47": "Vt1hE1FRCDwaiLn6ETv4xjXMV7DjfoRtxvechwRsFrUnLAbMuNiuwxnrd6YD2Mfn8QK3BsDNZfUGn8BA6KYt1Aj"
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
