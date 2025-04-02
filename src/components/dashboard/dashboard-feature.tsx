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
    "2GTGmabe6S6x1Q2BUC5zFhPz97UxGDzCZiLc4dJTL1FtCeozPs2p4my6T957VZg6ncH5bMYQ53ySf5DSfTPb99gu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dd8kuobhTpY6yQzfon9YCPZhsoT5hui48rKKiTbSLjzQW5LubXJTmMBW1gteq2yyaoVgCCYzxAp1umovSipXm8T",
  "key1": "5RU99r5NpfH39M73FAVFTW8Rt4pRrvWQPPESMqXy9chbhRCVvtDyfCWaGn8m9x2sK9gjP1fiuQ4FhThPxjeMsSJg",
  "key2": "2mxE21XBU2WvVwHpKopiyAjPQVeURyJPY669R2pennJvxdcvo6oGKb88AfeguwPHd4foYAoXP8BjrLKJHbBdszRV",
  "key3": "3A639RChmq2sn8qc6aQciExCNHcWuaaUCRthnM3uF9JN1sbec2eKjfadjVsxLQaCd9vYLdQdhvTabf3ggrFvcr74",
  "key4": "242cDmnU8pNzTRVyQehCYDEU3GU1xWMeC9ekDYK1Mk1cs1LLxK2hDzvLrjEs2Y4xVGUsb7pRps7zWkxVrXqf8NQX",
  "key5": "28chedtnXFVDcsUEDEQWpvFxADfarJZaxyFZHaUbXBx1QTvSZ9drCJRqJiJhDBtgwp3BAGMnyHkm72mPxZeZvDEs",
  "key6": "3vzouk6FpwSmgCvaNL7DicmGpNT52SKTQyhhYWzVQocSQ9rRWBDwcynfzqhWxkEnUNyojeAzKv5XyrikqTe6WFYx",
  "key7": "126zdRbhjeWt9ya3xZodPNfuEe8JoMUFf1mqNLPAJuk3jPzuFboWcNQKToLoxnFohhaRG411Vu3an7bpHcD6Rz77",
  "key8": "YPNcZ7jXRjSRGx2NoY4X3vYpgtr6w4BPu2JsmX2rAnJQKQ3S1gahjC5cAy3hfPMGtqFgLSySQHDjTJV1iWMFDjK",
  "key9": "DfMSb4AmWDQzrnzbFgGiAyRuqNxcmjyyq9vDe4TFdBbpgaRMwF5pyvZqw7otq4CSxLqq4rfMfShm9N6vDCL7ygu",
  "key10": "3WbDJsLjBgwtm87DTNobSbob9iq4hR19SeRHbopkmzk364FGpM3k5UvmPtQ4x5i2kvMem48fT8PLTvszFaMDNtoE",
  "key11": "AYkC1KWomeQD1mCm75DgHGiQPQ3Vub2yvz9m4WS3xvBijajoRN4nNgSxspegPgmnRFi1wtAjs3SvB5FoCbduU3C",
  "key12": "65bLiZTjegT5eRJQxpzh1Lnpp4qCyqpYAZMrSurAK54hWJqvwWfQDG2RXC1Nz2ApNFFiGNPQuujkAbM6JBUEx1Tq",
  "key13": "muNTCvdxMCu6biZ4eCabQU5dTWJrACzZDWJMg1pwgfLoPmMo2LT2e3iUv3FRwAkVjMpRttbquDGKGGemFjECL5p",
  "key14": "WB1PiDasAVjL7w8NytrwR1WjdHkMYeqxdRj3VAA43UP6mGBu9RBpe1BghJTpmkhbS7zYo5SwdkU5BdvPVNoPUhs",
  "key15": "3Dn2epn2WbQ4XDGyQamWQVDrWKfS5SYT37KPjX7ikAQVT4d9x2pSBL1pUjhFsvKMvdycA5zehNp5wWzPgsqSbcKv",
  "key16": "2ACkMFvZ3G829qVSo5MyFNE6Ki67FMWyYnNbEc2DjjM7iKpUDoTHoEqF6bwdjLCwFomBzkQv6xDzNKdqaSsS2jTo",
  "key17": "2juRvou2UVz6Pp3Y67aUFaAAhfNANx9LC8oho8KPmhUhePJwC7fSvYiVH3Wj2VWERm3dGQjwQzVnhgzmYdDZdx67",
  "key18": "2xE1SX652Acwd8nNudJVmRvrtuixM77ZgJET2p6ek4PVGotzrYYX9kTuvewok7ALSiHu2Lu5DX1nVg3uKG6fAedn",
  "key19": "29xRmh2xE5c1Do9GsUCKG2cMy9Ad7hLcCjEAL3ArLpidrRmCEn3qPQGWDSv3fUmaFzbnMqTkvJs867qvWtdMUZZq",
  "key20": "4AJCTb2EhzwiRUfFKY2Jt8fwqz2Q4huCgJ5TySdeGGn6BdRTmKYpMinr9BUSPiSXe2cM42cKatVLPj3jThzrrBQj",
  "key21": "5toC71p4uRhagSu8buEBNW459PDqYARgZpuS4wQRiqt2DvyrktYDBbYBBbQKUfWqaBrQMrneGra52BzTSECd29A3",
  "key22": "u5o3nTUzkwhcKBF8VQVJFxRz4GBzPs8henmgqPmdQsnnYUWoEXJiedo21GtS5TitfFhD18L2MN5HtizJLhXqgVw",
  "key23": "61w5UBX4LjZEE8CM1fjyKPoqXhzuxWW4GqsGv94m7QLegfcTxWkaJr4RE72kRPdtfrsLoUzZDNMr9Y2C9MSocQyp",
  "key24": "29eKmXCZXvPKCrgwYPkRAyM8y57A7XcpQ64cpeYQCRpJarTsZkLQJciVGdpztu2fD9Czvdtw1Re8xE6NDXjH67as",
  "key25": "Q7gc9VW2f5fTsbcn1VnHH4QKatuSwZbiANiTnJEnJQZr6cpTThT8A2qraodCDwJQPbmNcpou2maX2TodEAzDDnX",
  "key26": "3vp9CKfF3A5FjqV6vpLh8hiDZ463oPEotqfqYsfz9sbfyVvF5rakCuoSZFuSayG128PGSQPwNWy9H37K4vyKwH6X",
  "key27": "3YKEwka6JpejVGMnYPFZSw8U2T1WYXUgNDuEkNBX6MitbxEbDQZ2YQYxFjNJoaqdVmuYbqQ1shGHCYGAWYfRrFwA",
  "key28": "35E1Uex5szdMWQoUPJkUJbqNxNbaiVTmP6vQMYdtxzqVvQbrNVNKfZebj9sjk27sUxC9VQNyacA8S9zcTuZaXUhT",
  "key29": "8vSASwTxFbA2CopG8oYt1eje3jSUAkEWRL2gec2VfkVwtqefQws3eDnMkP34GWY9TLkT5DYniixKrPQiy7oXWTf"
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
