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
    "4rZgPF1p25BC9feNkLvCWnPrZGR6prWfbxRJpw1DFXGrgAciz1bU7XVuToVGiQF6PoZqsMWbHGr5ecFadHUJukSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Cmd8iH4Ff8VfDXEFFfvAY1YPTzt7hyzD1qRDafQbyt6Rr7WXYj7LcKxw9fnJBtoJwV1mZH21XFAm91ZQpRMBgf",
  "key1": "37NvhGzvq1hf6pkDPHREJNK9Y3EHpjjVkahCeCCsrWzbU5qqGHsKpy8GwHyNbFjCKFWWamnTP5PQaNgCdqieJNv3",
  "key2": "3eVbQeqmFZ7mrGiDJBgvnkbxmbAhVTXknddhVTiWwtR7PHik1veYYRCzEbcges74zx7nFdzHibGBDmDLqbWuymXr",
  "key3": "4DYYRX6yVTrtrJq4sdMcWKHCDQMn6bM7izvwTXPoo79jPsgAukmLVUzbw8prQcz8ertoGSpEboaGWg5gZkRZVkVG",
  "key4": "2r7qqrrKYYXDUP3daH1wkRiDHM991CEz3YRBCE9waB8tTtyELhsekaqE4XwAgUwZkB1t9fDwQT6zmcmrgUrJcuQ",
  "key5": "9u3Ea9bz8kT76q7BaP97UHogGjmbQXpD4qBcKmYYmmHkK4pJ9KcHCAEzMJ5QKii9AbKaH7N4SvPg9kC2NxcNR6v",
  "key6": "5DJXvSy4s4BnrSTQu8YnkoPAxcAGLNy3jYUUoiCWwUzNDLoT38kbiWYq8XJZtGq8M7FnWH4LUvxZ4zEvfTREKYEE",
  "key7": "3kiCF2jdFqzCg6wpqSPqB7NFBRHyKHkBtHz34MXVZxQPgnYWS5Dg4L1LNvTdcRB4yzNEDVdiHrstfGmFWqLLCETS",
  "key8": "47G1fBRhikM5C46XMo3afTUGGNoHqfYJXVHrZQtd25JJ2FMne5fkwMeBMuypKYLJU1ktGn2toSmJaxmC7qHawa5w",
  "key9": "eZgMsaDWt5Nsqey5eMEisaaQfm8GzTWL6Qbukeuo22Lc2qEwCBniFmhx876Zbaw6GFopLixmYcpV2359qoVTzQQ",
  "key10": "2MJebCihPizyEVAVx1iuurMybfL6CaZLMvohKGMuCPffc4xzGFWNvnXdfdyz9tUNwfE71wnaq1Nastcbw7tWmuUL",
  "key11": "2eAuisBWmbEvPpXGExZ53cmN1Be7b5sHeW9kMVFXUDaHR214XCmBxoMT5uBUXVWyN2DpvxUd2fpLU3HSfGMZWQrf",
  "key12": "4NSNpRZEeJ5Xj5MoNXisi5VAs88c1MGyPvmYJr5kDz4xgcuidYG2D5KUwHLXCtzYUoZ43xC5qTA3K5MmEpFJf17e",
  "key13": "KZVgAMD1oRf2jsMKdG6vZykQVebL7JmYYsArkWzjXbwNvku6WCEP66VXwga1rpR43dpXwNMHtfjawryqvCCJVbM",
  "key14": "2RHaFatV2zNQN3ZZg6ADDc4xpmBoeVu7hb8qZbd2oBm4qscgGKwNRjBEvSLQfEvBEkXoDmiBAvZGwKKgi5NGTWnn",
  "key15": "618fmXjELX8cr8kQyUNXvJgAk7qB47EtumDw75r1wqsbPTYFW3UYFVmHbV1iJCco3KsKj1phgvpP95hqYsy6rqxJ",
  "key16": "5NL6qr1ADcdmHFk868PqQdDEHiYnJqsacVHcpttXMgdshvVKHUsM9yxzEKWHwYRMJMWzzFUrF8U62oTp3TUUQJd7",
  "key17": "3joTjwgM7KYUnYdGWokByVcEsYgV6LYfG55fehTEArBRLU83keA6v89TSnnTRndun4Hnjdo3oKAhDKrRe5SdJZzW",
  "key18": "3kam3cUF5KPN4auGaSeSz3gn69YXPArhBQv8VyDM1SbceJiUtniUKt3SDH456mEMLgZhEG1MhYC1WMSKAUgDqd6J",
  "key19": "5vnNDstScrkWSRrSaMDSwDrBe9Yij5Z7na9xE4GrBCxAP1MoDudKyChF5z69kYRzsHvGEvha8MVFnX3kjGWQYTMh",
  "key20": "1aW8bvYGRDbo6RMvQnxV5Kzfeybqmct4rAzHAVB9rUg2ukLNS6Ks3iFqh3mR4hAGu19LDRy8mccD42kxW8J5Pq6",
  "key21": "dAZTLy56HUW9pX9veombjapxfQU9m6Kwo179bbr1xJmvXHrvCwkZukLwvbqsuM9J6KgYyxduAivnBGoYcAoyVpd",
  "key22": "2ZXnf4UeDL72KrvPVhtudiwJC7Snewy6Kq9Qg8FXPRKXmMoj1j54Zorpe4WDDmxHRULvaRbwD9NmMERtRZXnM2Pa",
  "key23": "33skTzKMohHMHxbcTigDXohAFou6eTPTw39nGoB7f3PcPDZPr9GNdWodXMt7wQFjz1DHfp5c1wksq7vcNUT99jZu",
  "key24": "42Btn6Cf5yqxWk8bYdzAhsZ3KFTYDU1SQdtv5hJrERqzYh7k35dXTBGAeG8gupriH3B4tjPd9D82gJ932fKTM4Wi",
  "key25": "Gd9SBkUhp6XCeDAXMMTYLoHXonSYEAN1r6rpj7tho3CAJGKCvmc5Kv8Wg5Q7zTnnENAcgrxSK3GT74agucQ4hPU",
  "key26": "3U44Vh837KnRiLxd89ZbEsqrtcVvtnnRixQD2cdut8BP6wFELMUNHW2WbKxkhkcrsSTBpnoZgtt1BKvLF4QQ6pXg",
  "key27": "4gnhUvvzAjKiWW27ojcRTQRYcbYpeen6GXgKmyA9ZcQdqSd2o1oDP7SwZ4r42FSuNM8tMSeiCKgJYbDBH4bMHA1m",
  "key28": "379YzcnYbsiHdj137jaEy6ezWS6TvRRiCGcwmDkMxuto4ZamidjanyKAU339z6fwicSe7E8ZzQThE7qB6gPX57nj",
  "key29": "c4pGkE9vDXftbvJ7dumy5FdLF5BRsG3CMc8y3zRaU64MLEztZEjPSapxmictbsgN35nKDa3dYAeACJPmp8GnVFq",
  "key30": "5erj4kzNiv3jUPSVNCDjjo1LRJUMuEZtLDx3SQ8z2jvRTfFjTHfJe7QiaMDkA9tfYZfz36wEEsqrkmN1kiwwjAkb"
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
