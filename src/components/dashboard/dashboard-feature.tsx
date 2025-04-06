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
    "2v57wVBNNJEBW15BS2Pd49WS9kH9CYFgscwfTbJdWXPJmBzJffmQkrnMH4D2UeauyCwonrsXbfQaNAjuzzECrS23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "amR7hWzuML6z4ds4Q7TU2YBTvyZWifMKAUtqN3jPhjgcUpymx7kCnaFtHxJim94vF6BS6moU1DMrw7dMY1vaozM",
  "key1": "24fePauFRmDnLruhDzsTQrJvZXEc8m5aDZRgFY1GWXDjkVxjkRmM6YzdtksDGMLrfE4yCsNj43uE7iJnWy2kXCtx",
  "key2": "4qZvVuTMkiLQWAmVaUWJChJvQ3yb7DogzgiKPmeVNtBnr2iYpAen34x5SZdUVBcpGD6dxzQR2pLdGqKNhzJK2Tv5",
  "key3": "5yDR3iCLk7wuMFvTYQtduDjuxuJXUuf9UtGuxAy3Ty6fkv6wkWSUvu7tF8CwoY4VDY5bZYsR1qVgkZfJ34XL84Ka",
  "key4": "47RoUaNdNwgYRKJioP4JdF5ZaHgxCtoXK7PFgFSim6tf5cr9X6uMZ28gWqTjCi25bq1n862kgcDjePF5tyTdgNzk",
  "key5": "66P6GSuGcnTELkAj2AEW9nR9PqbLdHj6vUoN3ohnjv1n3vpFZvWQQ5vqTNePMjtXoc9NkkS4PwbccKtwohJd8Ch9",
  "key6": "28V7Wserz14nqGcrNvaxdM8BwfExrP5AGDRqPMxs8tQnEr3WxEhiWqKLJD3yi4T2hUqkDAxW99S3Lcotjnq8zTCH",
  "key7": "qsLUC3PYpMfuni4qanuZgy3XQH5zx9jnz3aHpnWfiSthstX1RNLFLJpJ6FZz74rDaKEPoegrCdG8YEczv5WcCsK",
  "key8": "46vurr8eWpWfYcG6mNeyMBCWPuDza54uo4Uz5cqt5MqzVGuC6Eh1VZgdWMgo5RJ1RkpMwab5tCjHLF25ffmrhxTG",
  "key9": "4qNoUQmvni3HP17Nb9KsBTd74MEpHm9zUpCX4bhDsjToDCT2aMnD57toCL93n641r7Bdfytnj8GknPuKNvXuvvii",
  "key10": "27vAwpGUB5nAnv4rM56cUYtkz5xj276Y8XJEpMyLQG8vbLgthC65ujazd8dcB7exzMebNTb83EArtwmePaVYsYiQ",
  "key11": "5ZDYQyAvWsVW3jKXjbEJFFKPbURDxer6A2hBBHEt9B9Sjehoz2FngSxrHVXB23bfsS9wmTSWpKtkrq9AfKFWZaDZ",
  "key12": "4kHzbP7VK9pdPhEDkHHuRyTSnMqxKpekXQzqvav7dX2fSLYLyNoSHtMGnQynnWgoqTAEHQJDBkNhFqsLJmbNCrRY",
  "key13": "4w1WbQ9Chu7rEsVy6Am9dRVrb6YwKvsMo4yDNn1poiSGyAd82zvQLDa9v9ypwBteP6SQ8QJt7sWeDPWuDxdgveW4",
  "key14": "2TH672yeTAXKvinriNBEwgdMc2xwainEVLh3NSzsse7eYnLyWqC3KKUGkvuCrAPt845AMF1QV6F7vySoirXQLGCP",
  "key15": "4ZzSzaDMoUuVY8GWD7vV4TU5P9jsuXn3ytkgmj17SfTWb2MnowvpktnWns6BTPwegPHnsbXvRBae5zGocpiMFnsd",
  "key16": "3ZdatAFWTWmS5CT3ZSzDH3AhjvaUoHgvqarQNrhjdsCWXWBHvNE5J3nkL4Ef3s3fJVVH7HHjwe24R2Tt2bzo1sbJ",
  "key17": "4FPsxYa7dyjsraMiN9Dn7RnipQaySgqtZmD3q5RHoGgH9EsHfFrDJvyWpmEUxSp8k25qRzc2AeYSJagmQfsSzNFB",
  "key18": "21FLRFVo5BDxnDyCVm5m2Db2Jkjh6TqGwEc1ZCeyuRCgYYHhAxWMn314VTpufVfG4enHdZzCNLsRxvKNkXfm36Q8",
  "key19": "3TS1GoeoMQCnKXpKAkwi9Qu78dbfQVEqmvxgEXU43bWNFTHbvJbAmLJngzGCmzQ28vJVwWqkQD4XpJXrVGXEYHUs",
  "key20": "2xYJhEYiK2AvEG97sjS7Lda7qBrYZnpjuC9pRbhQnnypzQojFRKpPKFxfCad9GuS6yMRwocpEkCfHaX7cbEoNf8Y",
  "key21": "5TcUD8TKhQyVXiNNVcAMGixKixPbxsPutzGW2gUQpEFJEXWZxGakHxxu9qFRkzFhKVC8kkBsSNBu1Cm5yvhSHXVJ",
  "key22": "3wfENdzhgvxhDBnzzTRiZBehuuLqReTcPW5fSQQx1krcuZLm3MukKuN3MwGzSQxwggChDySarJA6Np5vYe3hCw1t",
  "key23": "3HBvkErVWPN7vC6K1GoxogDnpdueh3mp8tXb8GoaKeMD3UBNkhy1jbgQsfKoAKRNmTNS5aWL2bdchopbxfVcRXwk",
  "key24": "3JMyF4yKYtU7ypdXkK1f51yW68BV1iwptji4Y1MQ7AEjoQMEnrBVkSyjo3RpSpSiuAJ1VYUWVDZpNactiL2BhVAa",
  "key25": "5veQnHF2T2X92Xf75rGwFZkhWcQWkYsd2b6ae1hGhXd1Ae27aiHt2NQSLKSN6BL591T4y8YBmzLiUCe5DhnYx9cV",
  "key26": "5cWesBBgfpHXMbeijggir2aekw7FBHzyPWpfJPu74X95zTNJv3RG7iEgpzCcUNyJB5WCsmSdoqQFoXoaw21w6yz2",
  "key27": "TdjxrQFXVPYGpzXEr9n8LMF9WCDa78pkA3Q4ihbDviPC11UFHdCzDv14VFnLTmivLxdo1dnXQ8t1hREs4swbNbF",
  "key28": "5dykSTdrzJswMUbNHpE7xphUdFuECWM8Dt3Vpgtg9XjrZxKCw6ygdg3p3LZDKtBJH1pfj6QWJn5pb4HyoHTpoAcz",
  "key29": "3dCAEndvPbrXnFDgzeZMJGbLmLJdZWARe8g8imu9KwbbhpujKgG1MyteCihK692R7HyArkSNHEpn2kQH7kTMYSvi",
  "key30": "3Bt5MV6hQKeA2PDofYh97mYhcByMpYmRY5Bb2RrtvBXM72wFxsM6ZnHg9vEU2Rgqa3gusGr3MgW12LAeyKvae8uw",
  "key31": "4gNoBdWNfBPdU7yVHn2ygepL6zXtCSRgrxnsc5AxXHkxYLH2WMyQcLQwcpMhB5FxG9NvBG7MmSETzZG29TdYESL8"
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
