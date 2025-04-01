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
    "ngjU1hZGNoXNDB8A3R1irRZyQJmyNTwbWa4zxXgrD2qAorqX6oVBAZsWyMoEsC8Aa6jsdsLwi3YKX7u2uFtiGPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57QaXrMQeydBhaaQyUAeYdhPYbJ168H4je7GEu3uzgGfSn1xXsD2bLquMqWaLAfqbQMDnp5AyKrtWpu83qsheh67",
  "key1": "jfyQiBx5Hpk4tUMYEAxrfT9R6KazVy55RNZCWqQWRUk4CopJLtpiJjz5pEBUsxMQ3Arid8YTUWmXoP9NcDgJwkb",
  "key2": "Bd2SzgbKR9V1xdyFJnDcDnxudmECzNeyExAEv3w67xFxgo2TswLnhWRUuoTMyjNMujDdrNARsyLczS4G8f9HFQE",
  "key3": "FSCwiNAoyG2pa4C4SpTWDUFHTGGVhiKgYvjtbX2wKes5c72mEUpN4McxhXvyp215orerPwxWx6YMEqzrsgygJJn",
  "key4": "eo78XTsxpboucSGeHGsW3CBNYpkq86NeBia4B6TBATB2KsWfhXqnCLJ4FRmEUDxQEmBYGuBbB2ECpy1QJacUN5Y",
  "key5": "4nbHmu1bC5dpFNaDPQXhMiHcY6kT9sSH5BVuPaAJsLd8uoqNdCu4fws2m4WEXKUszPbX7QNLJcNZ1W1dTVZCuuYq",
  "key6": "Ltm9GHmbb8s3wQpKTNoAMqgevvWNshs22GuK25UUSN2XTbkqEkg17pYHV11AYbbJEpRDWLat6vADaNULUfD8yrS",
  "key7": "zRzZh7RpweYgVb3JZZPU4KbucfgdKKAMsbExHz8ijUPVLH6XxroLdoNhcFaraw3EyzGSD7NQ2MiGJhCVzFEuAgH",
  "key8": "62iSBxVXS9aXtn33USBupT8FhGDVJiBwSSZ5nJEN58fCfiyHR87Jtaq87bD83axY33PXDAsb2Q8HYQm7QUp33hrg",
  "key9": "4Uzuiec3Nff6Uq49N28ARTCEof2gsE3qk56wiPVps5SzNJ3CtF1EKsYi9BGTxi9jK4kiDa4NnLNPFB11ZQYme99x",
  "key10": "5azmtdB49Re9UFEuTkZpye7kjT5TmmbStaPCHJ57jBfYdmpmL5wjXnXoG17jveFDF3f3uKCeBkEnw7s6XsQVfqgb",
  "key11": "3bcb27FqrtJojGDbh6D8XiGvPVGukn2MeQxYFqs5scYu38Jrj8axHP4GRpyhBmdmMquBUj69vym999sjL59vGYaB",
  "key12": "2Xco2qhYddHynq1uRrkpdnExY4iX8Ar4JhPdySPwbB8pGHXkLBnEJriTsxZYjrKVRbR36Wr1zK2zsiRDiTgHoU1u",
  "key13": "2BbVprhTjmt4ne7M4bv5SAZYYmCPHgk9zYVGdT2SW4gxzyGDoLvGzXYg5YbAVAvLGSHMZ6Z6WSYuaM36pE9au5aj",
  "key14": "2qMPAaoPF3Aas3dSiuEfAhmdWPEHbCysaF5cxgTLnPC7iv1RaqC84ayCDwsSKKUqWvohKYGHThf1S1CGRYaZHCTN",
  "key15": "4rseJsVnsTw2GHGzABR8EvTuacXWfRNkkoKYTbKLiWkw9Td4NtU6GaSKiSnFaEgZNv4ThKmbpSXYxb1sV6RzmXe",
  "key16": "3JzXdddDNQFhtdvqvqHT4saqFkZvm2kVKqmkUSbcFe3EF5pfCSKNeEBe2mFJYZBaXdBWvr7SLzeqACRbo239DBwJ",
  "key17": "26xb13jjGqz9ATBxNgjPnxABmBq4h76ZVwiTKYLjncnu92h2QkRoQKSircscY4QnN6qPECqP4czcRxhvY2rU57zr",
  "key18": "PRcCbAmN8aQa1UNtLUsmkbb7knjebj1D57ET7gqYP41cRt1mU5uo7pF1XE35mEQCBTCZtHFdVkq3xHBgMA2v6Ho",
  "key19": "cPCosdodeDrUvjf2TdrEZoVqM1UKXChN3g3rPSYMP3arKNHqAEkbyH4uMgaH2ZqYUJcBFYS1ZwPXeeZeVK4mZjV",
  "key20": "TyFRLKCrkg2dqMMKW62mGEidqWRoSYjc8SMbtRxR5iu8VvwZMc12ZjqtJ4UieMYr3aYHeQC4wnP7F62UBoC25qR",
  "key21": "RBeH54kpS1UzKECxAEZk6WonvZyijsKZse2RmG3B8eSsPztfviTVAqtBmvsQBmbztQfR9pCdvyr3bFynZJFeBTH",
  "key22": "FA3zYqdwgNsjQ4WYaQsvNsvPoP8wAgGbTEdd8TkZwb6V3TzQN6YMVDhjfmtsA5SD4qomN6ds3uqRmqTsKU5rT7j",
  "key23": "3a743F5wDystR57z8btj2ueqs6aWQep5Wy85qMaiDXngBHQz5cLhdrBuHdVQVNhPBkSeTxNE5ZQL98jgyjZsEUPS",
  "key24": "5syuRpUXKkoCUGbj9s5jCvVb2Tqbf8wWmitykJbmZv6r1QXJUegzp3BPmXzfegV6Qpqfe3sF32nyaotfanud76KC",
  "key25": "2HoZ6ViHYh3KsEqM7YQ3ZTrfuiQnMxizjbVUbgJLUDSdDdWvK8efFNW2cjANoxfxcRnESvtBm5y12MU2mWPdc2BN"
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
