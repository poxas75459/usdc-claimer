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
    "4knvjUai3YgTpXxxBThAtf3nEts1ZT7R49wxK9HcvXzfpv115VemqRPHRHBtMYQpKsiDaugdGGtsc9hucgDx5Z6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JgGYzara4dTw1ECJoAMRXtiC6NozKC8fh6przxvfYcChqcsgkm83Mf6DsaDcSPcXj8tdDzDmeyKeTm36Zcb8Lfn",
  "key1": "3AQqB2bmW6H22P1oUeNWEG7tjixsyChVwp34uhbqts36qq4YMS1fny8rTyVDmeLJMojwQ3SLbcfjYAyGJYSr6WWu",
  "key2": "5yKi1J9seQ556APTYneL3sorvPN5nMLtNt4Y1Gv9hwTTArgcM3QFiZzviu7TSmh4Ed3iC3Y4QbRb1rgLkXtgDNTF",
  "key3": "3C3E9PF2jZbCk7TY8Upc2q28yHiPXVENQZpTEkytYrg7kKdtaAQMXbvCmBNTG55p1nQwYZ6zFsZHSVXagTM19eTP",
  "key4": "gtMnQz5sPgdsuj5MZjWapTAz3H17rPnbfwP4rLGCwyAf5s3DEiya5J3er4Xco3cAxiAzCUbU3ik9MHJW5616xog",
  "key5": "59mmD5QdwUwWKmjwMm6s1Erqt8Ew65T8pNTLNr5DYXXtAh5ME5dbxaw7dYQ8Z959vzKkiEsczmPkRoFkH3ttkQaP",
  "key6": "ENhCWB6tKQSqAdLMCSVkaHiis6pPE5ks9qK4pkdBR2GWhVtMen8QApLWkWvfwAPWKydqLTZJ2N17oovZ1gUQB9M",
  "key7": "3xxtJrHhCV9wX3o1fLfDpbPcMwZ5gnXGPuk5Zx6c7fdwmuSqTaszNVfzYbxyNEyMS9vhTaRFS7zPDkGrHPhzPDkt",
  "key8": "2RnJwsZaNrTfHvJzkhtKy7gLN4DizQub3ZVctXE9vEE3JD24CosEb2owsdWMURdkMxxxqRGUffRJnUBWwzCyDWgu",
  "key9": "5RRkwZHo5hzeouG59H7AqZioBhBCLuSTKUzX8tHxNuJXr9a6Y8BPhm2BpCP51Kyej3LWoNVN7ave8GjF3pFqjcjr",
  "key10": "axGeUdsbw2TdiaynUAxA6PPAVfthLy5pkRCgxiVuqYcfGrUbLELcig2m3a1VoBmGFht5CRBvdzr6uYiD8X4SwVh",
  "key11": "4fqZdFSCnNLYBaYtP2RpGWhD8tw3N5qKBYPAvY7aH8sdM8RNh2r9ceKPb6W3rfSCUUj7bhUQabRy8wURrzifz5nn",
  "key12": "2dt5AC5HJbewJaamfMXDxSa7KFkUDTBMHE1PMz7G9mMJV3GEFnGXKUVp46rMsaAjymQiNpFQ1HiUNi63E1AxEFyZ",
  "key13": "5BiQLn6dMPN8oQgfUsy6iiNmYYcgTurYzHtqmJMyxyWJgpZu9RLiX8LHWPsJd19N9owanoF7GyeBvpVrxj4YuJDY",
  "key14": "dmcNnE5rZ9xsE3kWohmbis8hZuCSfLDv551srSdFxMvtJmaCyY4iyPhn85pGD3kgSB7cV1kpgE9k2p5ajhSWMb2",
  "key15": "MQZPDD8ar2Rx51A8RPKnUD5hc4asHPCgXZeLLraWb6yvQkheBFFAHvMgkQLX97dyjXRD12rMmBnVgKYWEGtHxjB",
  "key16": "2RsE3vCa5kGnKv6irUWJ8F1isbQzmqSQybvdWd6mu3aUZ9J7kyJsRqSAkEVcAPoa33mmjp62kpyNjBotWcmZ2CTo",
  "key17": "65HW444s5SHnaQeg7ENHhZXBNFp3tJRCprDyvC5zioCL8DTXCpoCEDDZRoBwEzpE5qLEptWNbzYbHY8vRLrTtDV1",
  "key18": "3j5y44DeZ1fyz5JWYZEF27ePtmxSZpsuhn3t2kb7VeR8ATnzRBnJtPXWyoY6TGk82myLqStGRWAZzdehBbSngLh1",
  "key19": "26suDUDNYTHp4FGs3FNbvFoYMdaxzhiE9qyxGqLHXTVFuo4XCW3TxkiZroxgm3cgCbHVU5sRpDxMZWgYftg2CNfa",
  "key20": "hk7spKmwWjNLCQN9EHad1daW4NdLzRtK5AbP5Si4fqHTgTYbZNG12XLjM3VBfK454ZqG6et6ujhcVnQaAzQGQX1",
  "key21": "2mCobXak3v5Vkz1mwAsZ5U6S1mmtkxg5SkLpNTYvZ42VJRoc2kefvMTUNuCZxBJWATxvTarK6EkPVSCHG9H72xwt",
  "key22": "3crQcNev2QLUECxMen8ccSMCqZXU3X8GdgefQMihwUNa39iKcGgPAStNFhaooyM6pxpLZg76U7Nzy3TaDJmK3oaL",
  "key23": "4NFzxSQpUm9522yva9PinsvYCb2g6qW5AnKYyeXc4mKnnaDxXGN99WLMkuxu3W23W2U9knJV2s9RiqHQ8bUZMUzs",
  "key24": "5AQeuxoJLDdtDyhvvXLffS6pNwuSbsNfqSenscm2GopXrMr6FD94zYG4U5Rkj6xAfdjDBajYDWMGSefe8abPxFqX",
  "key25": "4B8jkMqLX3Q4rGxaDteCMpHUG4jya8ki9wVYa3LBUnLKVLj5hk79rRKJAkF482ZsHXZRgDMMXrm8LiPybafNp6Yj",
  "key26": "3tL6dXYTNr38Esiq3Z9ozFJ4XCpq1arRvf1QKpYtFLhZqdKcut5hMtFmZfc1DUHKUaVEMYsxaLsxBCdawtrqrTJG",
  "key27": "5KxQqLFAjLnoK91GNCafuxTAmjzi2KPcFGeGEMEYitguueAurgnUAq4JVD4UAzqkFNGShK7L8d3yQ23rHsTTCx85",
  "key28": "5EK3wTdUQMXH5uiWiVA54UhvVwexM8zEiXesd9wScdk6sK1B2Mqvv8Qkbu6TKuAeUePkM99KUptWt1LS97HyoHHH",
  "key29": "4Jzftbths4VVauuZH1jZaRmGm2LaUYRDucMmse7bpoGqQR34kgubyt8YmC52X31PaNCfJqujkkVzFySn68P3RJpS",
  "key30": "5spRFiQrMymBQGYjBCcbe3bdwxDF1fVq43nnzJs5ESbr9Wz4fcDjEE84iKkQvah2n12YGgi1z2vM992VAUa2fkcx"
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
