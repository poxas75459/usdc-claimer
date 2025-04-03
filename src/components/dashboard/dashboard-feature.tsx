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
    "2jpiYGpDdpHn9XmMYTgHSa3Tdm7vCUFo3GqjCSj6nftsMR9SH2H9RDzVHyXwskftJvuZZpNCZmbTZF8rpa2KoK8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JmbHoLRsjtRF1xYFW2Mzo6HYueSGR9dLpxN66QxEkTseJ71YkqEMoQxNEpHJV9CjqeWMJimxQXf53RN3B16XP7b",
  "key1": "uZsSEPTWYhvy7NyQssQoW3HpaTBrorVxNR16iiDQbRHn2Nwn5kDBBM9mbPzLu7GiEqRtbYDoCvRWBnzTgHoHECG",
  "key2": "5x54H4mWkaRNBrhxRfedqsPpgDqDqsHEgsY4Gy4PLaPmxJt9UQW9xckx9nphinoegXNcGwLqCZHMYhVJdKNn7Pt9",
  "key3": "4XWyjZahEUK1izDFQrFB68KbEbM5G7hy7rLHWs1d7g8mQqZCZwc7mzeQRRpKZKZRa8of8YTX5zet1eYucsUKrrs6",
  "key4": "4aQSTdCYo2w6Jdu2iVASo7kzPWfK473ADWaQKUb8pJMamc1T5cANDxhmc3BPzKsDFbMJG6ptxQLmpX7cAFG5sxYc",
  "key5": "4eyry2BxS1tGugGrFCV795eBaU3ZuVLAxGafDiVEFc1Lo3kreJ8WQV85yixnRQHH7CYxagu2pHpdKCfusHK1hGfq",
  "key6": "2mZTGK4e8JHcpCJ2H7h8dwKMFU6pfYjkRmxdYnXorjUs4wg1PenFVfd5DNSpyHdtqVQdjFnVyMZDXmX8RxPenkrx",
  "key7": "5KFTgebD2tyiSrRwtVw7uzeaLXJ9PSV8uHfrbYrSrRR3DXnCmAjuxJEkA8Fs9D6isMoLwtoZVUkoBiPEdcnGtyfS",
  "key8": "4LNVA1j4FruiL34HGuiGwcS87eFrJEzViBAjDRhT3hBtGgD72w8pHpYKG6NaGHwgyJyuFDL2hyzvLa2UNbQZGT52",
  "key9": "qw64CBDuinWLMMNNXXGQTj1fyeYvyRTLHvMfP64XdR5F4BW5rkisL83ZySQ2Cf4DKUDFnqdd1yr7DX7YN3c5VNg",
  "key10": "2dEeiyT6wvaMSdwhBSexARHiJzqP5FvvABCSzofTnK96ecX3b1Q9tcFx78iveXzH66oFp8FxsvCwB6gWyqbfR75N",
  "key11": "3f3tnPRYY8sibfveRrzS2q4dQG8vuXPx9eNEKvvy3FMSva56u1FBo3B7EiuL9erDL5yLeHdgeKASmkcXrE3VrC6",
  "key12": "3u17jSs4C5ErjdaniNtKK7Rc37v2kJiEjWdSdpo1tbBRHTqDmGrGhXwk1EhN8qqQA8N5AYSVydP8odLQkbQJ5cNh",
  "key13": "2iS1tpCSX1YWRQqiaoakQ7KeHLpLqRGMqxdTyyhRkjyC6iW75A6pyCtAM3KPGQXepPK2HNtXc1RD6o6ZbTEuYaH7",
  "key14": "66TEynM3rND6Joy4byX1mndUwceLJ1N725uZcZb3HDuKnpD9XXVEaAJznZr6qV45BVQrp7kfxyYkqKTJjifdvDtP",
  "key15": "2MhVyH4vegdW6ron6z3vq6VECkJhxhujkEeLWN1eD2zE4XKRVx3CXSgJAw96rPXbst15EaFAcHJN8PXUFrRm4Waz",
  "key16": "2RKbqAUfExaoEbKZMMY4eGJdKjrXV3TMbdpo46sJRG19TgTcS11MXSen3hCGjjtCa8ThsGs9nF9nwp3MjwwhGyKL",
  "key17": "5eCJj5XLjzHtjJL7zEJ1qVkw4paCh3YWnHfkydbBhHiQRjxaies8yzZ1kijSRJZbaHWs9yswFmNvq8sLGs2kJPsp",
  "key18": "3nPdhvXj2cPYh1AstPYYY3LgJXyLJ1AcTXhbwiL8nY7vwpPBWPof8ssAxTjut1fJP1az4gCy8yBWFiQc4EueyLYW",
  "key19": "SaWKHkW3QWpnVbMbDntAWB7LBkSrqAxqbF3Bvb5UiUonsGkJHUp8azbHwv4Vxv6uYebi2bXtU6WxqQavHFDqxeo",
  "key20": "37ZZ5DinoDqMU6k81toK9bHQY5okmckMS568SywmuryJJvwngK9nPMpBXSfLyqWLATRUiY6YsBpjTGevF1aYV5Kv",
  "key21": "3YxqAx6N4DgxBzweYZM1FWS5JtGA7WrSxZcWax1PpRm7TF7QMVjUPX16AJwQCCD4oGNza7AQVV7uvWwH7DZ8C2q1",
  "key22": "5wxAzwtLd5BkrNVZUtn9zXJcYeKoEYgo6CmnddGdhqvcTurwv8Trw27TZiaPR3RVYH4Hduk26q8sYQgXvTbQCA1B",
  "key23": "gjEqny3sZzsaV86BYtCCjkEgr4KeEDFDSzPWwXoaAGTRQAwuH6amkg7adngqEgg3xFvUhJM4wvEVgWouFyBqNYi",
  "key24": "4stpfetq35k3s4NLh4qej9TBoocZnJkkM2zt3nbkvGHhZwtcqaC3en6ANozqVqsNajn5qYSFG1gTJ6HtH9FXSzVE",
  "key25": "32HyWK6ZLTwyE2DrriMqxuck6FgPrR1xHwhPfVSFqkd9kNgd91w9Ns9yYeZ9MZ7vNZ9UWCN2v3Q1qD2B4TytYf1j",
  "key26": "KWXRLzqPKmYT9T8Lhz8w2JQ1M8nK3zjuNmZuUQVXqDzYr3iHkbcSjnCccRSLfkjS2Furs7myjKkkbmPwyAp72Md",
  "key27": "26zkybP4tJeBcie3qZt98n3nrSrLqXEjJvtKLjgyxVB2vDaS6De8UnPqtzUW79TsxNMVNWudRuwHCuMmLZx9khmn",
  "key28": "3FE7dYk34NJv3WgHidGD6wU7tKt7sf89GMqmCLfE1aVTLARdHpe53mqTAcCNEg8K9CR6ti85q6Y8fZauwfxrPDns",
  "key29": "txoYmpWAExwS4eBhhVSJBKzVRvKHCW7XLqktkH7Z81qFX8aTxRr6sG26NjjYozAoDQzWCrDdnqAGefD2GzjKfmm",
  "key30": "5xW4ybPkyvMuKgKyo8xU9WqsSSJRoXTmJTvooKcojHDGt39yRT2amCiXFW7Ep7byJTWxE1RqXcSMqWeZfbkBMgZZ",
  "key31": "3d7eGRR8QVSgnKkhupdAduSJYFxJCpHTqeX1AESQhQ7WQLReUDmjBrU6ss7ZWjkhuRTZfLBbBD63Mk2qnRM8t69R",
  "key32": "2yxV4r8wddup25dhURfZhkEbXWTzWcY5CcJNhcuqUhpQrXj8yvubeCa8BJbU1mbidUi2oahuaxpyAtX23sFFrsfF",
  "key33": "SWNPq5AbsVoFCxK712a7J14dCWbmQKwFkU6vg23b5PJTsA23mo4SNgTnyW9U7CMXFR9iYHL1T1BR1XC5We78JUj",
  "key34": "nYbEYsLrxkHW1d97PBHokWmdsE2Y4fauThcjxsfaqA1t6JiFbWLhva6RUdtfLDQUmLgZyf3WB8BWgwPcQCLrYVp",
  "key35": "6469DMF5HiMGJ3E7WvwPY9HM5RWMR7yKxu6NNA89LGscwu4CRWCNZynP4s5JE83tSUmEzB27StumyB8UUCmJqk6o",
  "key36": "5eQgbN4N1VWsdVTuarZmxgSX2MogXq72uYheNCdHnVhAJr67qFKs5SvZkG12hVgWsQKX3NP4FvPZ1vrw47Tm9p6e",
  "key37": "4qaeBSPDd4DgvB6mL2Ezoa71tVYzLWyznhPhtGa5bZVjv3DyXDLK8nm2iZXCP6mQnSWSZEny7jFC6xo8sxsbk7pa",
  "key38": "4TGdBQqqgLsSsspaTnx2Z3h551JWKFTuyKDQW78ezYf5WdpBocVRf2eS4auJKbFUdQxNYvbZuKyuDjFiV4PhCrQq",
  "key39": "gwSGhZmvNAHMcYRQDucQhz1fhWm8NL36Hx7cxt2A1V8zMsLTPypJ2TThDPffkxWnP9er2tTVNm6GSKPqPTM4qPg"
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
