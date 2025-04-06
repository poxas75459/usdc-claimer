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
    "1WEapH82LU2CyXZq4ug3yxxhAakfraG3jz9NPezqBftpgSXwFqgTC5FaMUYYTv9RtG8ug5SscGT64hPbiSrqs4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uM5PghkcycGNsYRica6KHsayv3iHCfmHjENMiCDEdjzyDZSDzWYD5CB2ywP9s7H6LsmcwzX1bf45knLo7m52pns",
  "key1": "38WEgSHUNbQGZhW2c1Gp93B4dQ6nuJce3yrTBd9XrVTzUCtzx4MPy2ZTf2TxhLEPni461WpovGJ3MsBqLFAvtDx9",
  "key2": "5UUCTKodM66ePxW5i18Fac7vPddrVEFvsGnvLzUN3fuGGquskFHP5qB5yfxpnDcgEurhivUf6eju9HCdjGAA1Mnk",
  "key3": "27C5FpABR26exXdc1MAYUEFQ9CTZtvWHhTxfsr89nMstxePmeUXG2KrT6VWsdAQY86RYtU9t1HQZwgy4jC1v7xDL",
  "key4": "dW2tp6LXmu3C5WacjTcvRdyqztUJ89pU5ogYpJXRXntDfFnTk5RmpnfnVLg65Eke71gAEAn2S7Za9oZH7K5xKFT",
  "key5": "44rFzsJnhG8TXaXUwiVbnRy7rEGbGCqNALQd5TmpCiBt2J33p6rTKYCkseMHtvGH2quFovBJbXpzwWPwP2kxVSpi",
  "key6": "mJo4jJ7udNxJzFZaLxKvvtt4qzv1zAfKTXe7GwiV9D5wyQzJsYmsQxanXhCMBZNj1JSUmsrWsuoeMhLCwj3k6TM",
  "key7": "33aaCLKWS9NRD6exLceNwU2nK1yzHcD3uhw4QLEdFuiCMNbZAz973Uadim6RfcwiC6szEwNtqoGHnKX8uwLoCsxF",
  "key8": "jwNiKLsMFvkG3mxC1D8S9yd1kkgwxN3aqGtWDNy2PrFHUtH5D9psKjvgQ739TZkK9WE6mDgPUmsDBvWkbb8HiBq",
  "key9": "2AAzmf488BNPGSCWogPPdWDPW8oSgmdSzr5jzNprs2hv4wrToead3QyY9hggzmAoTeN9b7E9JVuHS9yQ92fMb4j7",
  "key10": "2dJqaXL77pgiBS4x4SVsr4Brzt85prCTfRyWmtTGSGzejx6xCQwTj6wy8PLAHKYbwhCyKHAR3VRNKAF6ocba8g5R",
  "key11": "4K3ZXapPeu2SmAhCsRNRz8WmyBoYbCfSwkcP58Vkh3ibMLy979UYstrRCExjXGximawEhruquwNCGrj9WuwWd3FF",
  "key12": "5exsKJmdz6ZUoDTcdfJ2CNcEUDJi1KTLZMufBhSTTMav6vnY5DWNJpU9RxM87HuBdxiL8emzYuFBtn6nJKuSt7tH",
  "key13": "Q6AkYrNMjpap7cJPtzif2nw27YymCnWwp5TvmD1ssPFsKPkKsSJha2SswyCX31QMoLRnWp9PQNREm5gpFDUxg61",
  "key14": "59VW3CV1Y2F3sxvnrk5ezLSRa9FK6wP99oqYCYVsJqE2XhHE1AVuQT2oGUjWToxS64mkxL7m5SkVAkfu1nu8HEaT",
  "key15": "3i1bhzRrutZxVtHSHpzX45maT4GnrKwLqkYyhBSBiTYqz82VjzwnarhYXpFuKnboAuZuEzDsoBUcdfoHiNEHtndp",
  "key16": "gs2Emo4o25CRhzkfmazuJm4eZCEUDxcnX9TjofKJHHGV74Pk36dhy7mpH3CbMxZzV1HfqTWu2YcuKjAR3mPdenv",
  "key17": "4ky7uY8ZumczpFK4TgushKEt1z2pasd2ctonxhawViffShvb7viHnVUvThNUDXB9f4LGVXD1orn68a81NF9tfu71",
  "key18": "61cY2TfkJbXDuxophfDKAJEYjDvmXffiFncK52PTd8su2UxKw1VHqPPQyvyF2NXvckuNaMWty3VKB2gvmCcGg41Y",
  "key19": "4TzUBahAPYnnQjM55hjDmp9ZEC2nYpy6ep3ckJqWABhDQd7nFcQcEgbdqm9xNNFaV8Mvv5WZisVU1pu5M6VSWFsr",
  "key20": "3ogr8sDmwhQbfn27762Bkpu4D57QHiamBUmySxS8xbPZdU3pAZyS3XvEkjgQm9s5LquSweqHuGXzch12oJ23HcWN",
  "key21": "5KhSdBjNpzE5a3CYpRUJrsbVQoEHXZ3stso1GmDLEKRpgNKGhrTFuxNG38JcVwhkHpgku6En1s6bnz2zpjYM8E9L",
  "key22": "27ozukRBH1MJ95KfepTHuZBSmaG43YpMU1dBU42ebA5TTe92mhgk8f2gez5pc5BkQCyzFphbwYZryVbdStdcMzCK",
  "key23": "WtgYgCvPDNyHnow441tshFFiiW2XkyiuM9sxh6dcDdXV3zcpGGkdypy1G7AWLNGSZnsXPTYNfpj1BofxRCaDzS6",
  "key24": "RwRoSTEnVh1erjXTUXCmx5uxwEFVmfXFYeZFSKMnhV421fuJRatigVQ6NMJQCjJgqhMdm7tNhvt81Qus4WCaooC",
  "key25": "39Njhj6Aw19mVLw45B3HqogoLGCebhMZAwGPjPQN69cfQykCn2X3uomEygz6YXfxFqany1WYs4Tfn12EMivNLsre",
  "key26": "2fwCrS41k7fLExucJJ7Ni4wDLJnRgiPifKELTe72E41T8SynbTyioGnQUY9FG2Zx58tsfsTeWKGcXKVEV4GegENm",
  "key27": "2jgx6rdWZ3HJHoogGnmJmsPXnuGk4uH9SWfAeUTAAterQicGC24MSn3KVYjSZRti4RmdfNXaELZybNwRfEXxgr6v",
  "key28": "3q3t3U1bzbY4wjHFQqSejcvpNrE6atW2ncrcJRPBSJuBbNq2d3nqyz2PxuKLdV6xsuah9RAL9thB3JAnamTbriKi",
  "key29": "481WwivqEAt7nD2reUqirxLXn9YhrsyxxmP9k6ZeyrBBR6kpWBP1g8eUUwB3Zua1i4mWWMK8BL33SVVnBfXDtpR9",
  "key30": "599JXAowb67gcvZiXmDfbaof3Rvj3hBUYiCggZMqdo1XSEP1FKg6F1XUsk28VxXc7tr5gmBAZ7ZWv9VFC9tzm8Aa",
  "key31": "3ojSiAQ1zfPxpFv3JK4qLdtU82ze8z6VjrC3QA4aQPCDGvpHhaXu6kUUF8dd5oCYGDQEVB9NoucTRYd186Uqk64U",
  "key32": "4nsSNN1CqvFzNa2sSKnT4hUaHZhywa6atxXhDmjPvTcHGZRDpV5UM5TNXz3U7UL3WasmSAJdmTqtVFs3TGDw8Wqk",
  "key33": "417QVJtynGwQs8xSSiQQ7zUDNz1uqC6x1dSSkeT5qw921p6F2PGw2m2ZGzNcFXLq3SPTTFuLLCLTxew2XyjTY6Ru",
  "key34": "3uC5twQciJU9pKjwXKFhVpMA5vBRQPfhacqL1rqGvXBELiKdBPDu26ruKYwwEE7ZaPJAgujbxMvRibn5aRmdD9Gy",
  "key35": "2jddZPpAKEeMYWi2aNw6nv6Jbo96b8VWxxaSvpdsQPnbneoDhKyjcq3GyXEU2dFWSK54phZ9oQZ16ym8whccP2jf",
  "key36": "2XDLPzeV3WcgLgy4Zs7AeRb5TQecyxDhweWc3isqAif9rjKKRNvNZWDGshxDRRDDc4jT6kQ6N5tWpuEuWUDxVvud"
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
