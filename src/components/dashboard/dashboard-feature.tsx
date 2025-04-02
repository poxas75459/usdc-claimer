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
    "3ZLirNujtQRzzQVEEoahz32QJduBwmg2G93bXgYzKhsB7gLK8XtXi5cVVmKmXmqRkERP79HAGXczQeq8H7WgRREm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FFMhQMMJ4kj8xF4jzmfv28ekDPcp4wXXtZ42DrwZMyh7XLdtvZmhhUemHjkTFCzTHY92hqcxnher3sYR4LEry3H",
  "key1": "55AykzQwcLB8rZWkY94oR4yRafqQGy91DBYWyPYP96B32tADFiBSMUuaNccFgogLjDb6vGXasetvhL9MyVwSuxnW",
  "key2": "5YTchaKm1sW5cpLnjgdRfV5ewcKUz5KtULfxD9ZBzBhdKbxonWF6LKy4S3eNP8jEcpLJXThVaqFUWTKPX4GGRD81",
  "key3": "3KRaezxbbutqzzY75MLDDug6J2PwHioZPNhjxAYBJ9c8gcZp49WGhnjkW7dRwEzLkkrjddtvEx6W7ogR4p5Gn6H3",
  "key4": "39C8hcaeVgoF5hU6EHjXiyovHt2EssArwt7mTWkNWCMKrFN1HgB2kCU56iTNKVoJS4Sw3t35zRwViZZE8bduiXJD",
  "key5": "2S1bK6Va6epHybqAMf7bQEzeYL5wjnw5cKYBQDze9QvKG8mS83dRkrpTKUwESsviud7jAmj1XHVfkgG5xapY6UEq",
  "key6": "3AzHEoSpoKcCKcwkJbQ3Bd9j6qVJqq41McZQvQCskoZHR5pBGjF5pGGVGDpVmhUXEorwTutCidzF4ZCPexqF6Pim",
  "key7": "bmrxgjcQhrcRXGRSZb4z8NoUy7dNWyMzktcNaq7G2nBU6WzRecoC2uUcS33LiMjbgGxqpYwJmfnGcLNaZwfgkNV",
  "key8": "5BG2j72qJFDyTzmCRgBh2C1hUomvscXRqE9DEemrffkPeLMaKB7tD2dqSHy79LzqEa8Xr1fHDAWLd5oP8rH28vc3",
  "key9": "5hn6fuU6Mo3GHWKK6tczog8aUPzNNw1pKxMuZRSorjjJzCZmgCzPoeg9Txs2QRKt5kqqtpADu5qbSb6MQrhEvzWF",
  "key10": "VWjMXRR3R9gWPt1ZJofb4DSutdD7GMYZwT5cPaXx2r3526jX1qqckrB3776DLihwh1921XhAV6DT3hZMhE9BxEv",
  "key11": "7XwAuv7fmrzMxHfa2KcqtCuvYQpR2DWB4vVEYYEm35dRMU1iQKErMD2svPxiYEsNQQ5iHR7GnccWmajDPPjoa2Y",
  "key12": "2UoLTs3c642xmy4w4Ruqbuam4kCznSsPqvZ2MYAvdFz3Q6PQDCqnbyYDdvYmGYphc6RBsvbnTGSe8RRBJ5twb2Lq",
  "key13": "2ZycoVu9arSC2kdY8byoo7TnbEfF8Ao2XMXMXcr1gmi92GYB2HWSLFvdmBGrkzFTY3NBFas3GvgyKykXnx9BBRUt",
  "key14": "5DAK9SGAd9w5shKcH1Ba71PnkZu73Gbipaan21h24xbD8zcbnXCwKYcY3rXEqT36iJ4vQhCX8pvB9SGUDtN2oxM7",
  "key15": "2tNUiB1xAif66TAaoKmvQyY9woVLmDznfYAgJxbX1qMHcQAzxUd2aNS1JeqVAeY7beMLEWshhGniJPvtz2QPPSX5",
  "key16": "2mss1bNK9JxkMDGr6jZkBNwBHqGvdTS2um1xDXDfR9TGVbPCv7ws9hcdyU4xufW3NC7dZufAy5JxjNcHt7FBjCmC",
  "key17": "5YFtf2mhyt5PFHNyybi2qQD6gFXHYxRra6MJo2Art43cDFU7KSgEC1oKxbmSK8ck53fzvTu5XG4GPrg55kavgyqo",
  "key18": "4QBNUFrYA9kNCRvk6T2p7GVWqwviLaGzPmV5gd79J1KXwxPVjyVZE8pMyK1NMX78T2NV7jrQkiTVgLzzcvT3ViPf",
  "key19": "JFPhu7jDb9UBkUdzWmAcKEkMoZ2tvpdNSs8BNpA3mXW9dYGpB1vujdh5wQNVmYa1wk1CGVVATygQJQvjMB82WTC",
  "key20": "2fnMcLA7HroPmWwj8dN1mGeDijknEmJ9c4und7iLUsZUqW7nixWt9rprWtjE8ocKVkiDyDAN3qh8hUfbywfCDNEm",
  "key21": "hetBkg4hTLH88ofj1ERAeXyr5kvBzAk8SMcfz6JNSsv4MHtVrrvVL3UWVL2fe3XBFp7BtWs6uz47Y2e6EpUpp4R",
  "key22": "3ocb9p2iXt7dYM3HyRJvEYHWhn4m4fBLC9wzivWWe8XigoPuDiSVcBzfns58fqT5PUmiMKLszrQo7oGF3MfQMM1X",
  "key23": "j8gSymuxNt8JWzi5wGBaabfFBh1rEqFdyjZgabo5cLesyLRt32pVTYggSDbHG1MXHaXAQYiHwcwMfd3knwJM5fi",
  "key24": "3ZSVtRKoYVQTibwXdZ6Y95ERZtmMS9bU8LdKnrQjyUJHqpctQmvESSXHbm6UofyHBBygi3EN171eE6X8ESdEf2N8",
  "key25": "4e1mUuGpZPk8pQxtuUwTwy7CdVwPPeANgkQ3KCvUzXmbHJT1RJ3mUU3sLa1VrGtGvmveMMmSuHUwPyUVyMjpX3Ey",
  "key26": "3BJRTQfxFspPf8JiAZwfTMspv99kx9Lf9ARXUm56FtG42dLmJArkZqwGJmrYaKgQyuXvT4RX6qQn6oHK2WjpRch3",
  "key27": "5XDPLeaayEgZMCxhH76UUNXSsJpC7F7xxFNasEeP2yvGKvaF47SQTYo11UCmXa6hJ3jYcJzYEh2PLajRLcxaqqR",
  "key28": "2YUCXUopUZ8i8yXjk8QRVDnE9eadfgoveYYwiWhZBqSvBQbwrMoAvkjhj56DzEo2WjYty6vYbmekJnmGVaEmQmV5",
  "key29": "2R8NaU8F6NTenwTFNufXdyURueMemKQdENz7pSfr2AnV5jSNFURbBDcqZGqpGvEHB7hVvtUQHm68ftZdu2wtPTig",
  "key30": "2muqCLzptpJeBxBHMRVF6UyYsfwf8LmhkTns6r8bo1sd1nyRdqLhoZoSgMejJ2uW1FXTF6gMqDjcMtnG2DnUGmVN",
  "key31": "3GvMZwG8XQZ87vZCWEtaeupUh8uNZ3FX2xRfgLvdZcqa5gXGqTjr63u2sjkqTbYFEVzMtQn6BzKHuWMqxP3ncaRH",
  "key32": "5Y7SFFNLP9CkbxKq7Um8fHamCorcwREN2rpvWvXBFa5HozF7sZE9jhuGJPipZ2r5CrwPSgVuc3cudYr9hrVWKXnb",
  "key33": "2WC22dC8LkvRVMb25uP29BHQkxQ8N96kaWvrrZDL8JRkQ9ygWWYXtAUSGyeY63W74bqj1HxxZJwfshGhQLk7ymbb",
  "key34": "f2Avqk5uS65dDPZLugpSbWLPkYGqRt6Cc45MnYPkd9QPHeMzJm72b3pTwfR96PAJmFeUDdG7hmRgFT5it7V1Yi6",
  "key35": "5smKD2AsC2ecx6779FM6WkGDZ11jq6gxPikUQbUNhXnJcAJJ9NFB5G9N4NYF5qbFeMfKhRQ49zb1aH4YhJBe4pcF",
  "key36": "53D2jwWFhE9dd4VenNK9PWY61Bqr1bYWDeZUYdm7EjvA74UbnXXLqyUZvWKEKVtWAY2X632JKBTZtR5wetXVLgtC",
  "key37": "4Y3UJPLJNFGG1qCT5zgXCnbw6Mo1Hey3sekBHCkfH4YHBN23aXvpsWGgmCf21UpHSNKZUVDFNNy9amv56Niyfa97",
  "key38": "3XN2RXPzMXzMh9XNcPENCKRLafFMB9XGnZJLDHHoE1kibQaWkDsD42sT1vyrdWL6HEmL4kMWbMCTyfjWbgv3pSkr"
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
