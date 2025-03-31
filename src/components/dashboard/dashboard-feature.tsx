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
    "5hKPuKXCBTApfMzexhdrE1AqYgDvbtJdUDpSE5amBdXZq7NZgpsixT3ATRZTFFdfpZNR7A7WEfeCViqVhTpwaoLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RFBYQeSxj5VExofFiUMKd5Eku7TeKea2hbM85fByx5VQ1d2b7NPyXscSTyRHY6Qi9engUWtdK6soKteenHeN9vn",
  "key1": "5e95dPE5WTsdQE4RgtpG76efRumEqZDKU25M7vRGMSmSW8f69U7G3YokUn6aF9o5ytmcFayLpi5MdAftA5t2ZWbG",
  "key2": "6FW2fjAfx3KqcTiwq3g5K4DnpDN8hhHFiUCwZUCaF3Sg1VhhPoiUNxVuzZYWnK3AX4bxkaJ4zg43DraSpNGaEkV",
  "key3": "4xnED727t47khodhYsRyHKJe5NbK2EotC76cpsY9iSjK37moZMbJByHvVUXXiJXVqvUMJ7NaR5ai2KRhZB7CRCYG",
  "key4": "a5s3sFck5z3HPW2xvZo7HDt7QxMwq1P1217aVxQbvMJC2F3Gz76vdtM6UH6fYonaF96SyybUQ4Xprz232pvgGU2",
  "key5": "5qrd6KtBYT5mLT5rGkFsVAWUF4AdAbzkzCAxRYiiQsXxWebiuSNTK3b6ViuSNRSyKU1soWgMbQk3tEqLXCqNwZjk",
  "key6": "4jJpG39EeNKSb3Xg1Md4dY7z66dsLeSSn2Bj48Tjcs2FUbbKJgAFuEAkC7f5KsQ5vGMoZrLUrbVEF86pep8CLxYU",
  "key7": "2AasNevo48Ngn1YSE5d3Y5rNykHJSeBXa9gnJLjxMgtUpXwEE6KeFTVowh3udmyo8iQwd88f87WbdZ2cTor7Wr9V",
  "key8": "2X2hdon5DQDFRPrURbqxTbYNHA8ksdCxLYhnBBT1oCTyAq1eymy4cSF48oj5KiUG3zwghsXWHoK8pTcWrgtjNbSj",
  "key9": "5PCz6yv83WYqZfifRiMRRG6xzfCM3HjUrEXuMLFYZu6rcG58eRsu8thDxCoH2pDjXp9KeASaX9VfSeLkQJKs3n9u",
  "key10": "Gy4PXwzNcJ3sKtJSTjG2ptTguZ4N1haBsETzqbdz8mUjzGMTEFwahsjYgHVi5ReYr5yNVoYa8q3HMwXDqDqCvWC",
  "key11": "4RaXkiE7XtWJfjgajeNQmhNCKYTPWkhzV5g1Ymc5tZvx4chLD4FhsCzm33sTiA7AxvDDMbCtZfPRhstDpg5JokJL",
  "key12": "5axkcXzJwLXumVdbYZb4UBkaVTCt99Z5gbjr6TwizJj9kRXMoLpjPeU9Rb5yN9NrGXQXqGnEwtUgJw7mtTMf5jS1",
  "key13": "NqKX4EKVt3yQmzVv866zkT9QceoUoohd13ET7vv3ECpvn4zyhivbMq8Z5NeoPkMMRCXNKAk4dHiEvY5S6hurVjm",
  "key14": "4TQpeXz3xyKp76JgqWwNKG295AUTZkqaxhVTygYZWsnaWQMFwikmN7zfHEruxLn7V83eD1yMG7ga1QSxGNjzgeae",
  "key15": "5scbJ6ANBgL6AYivupUP4FNazoEQRve97Uc9mpf7kgTLbphPhBkL2Qabpjh9fv78bwH16jtudEkkcVbfpqJRD8HZ",
  "key16": "YBqsYEsXKa8KvaF56yCHNL55PF9bGsnd58NpYGVwRaRPa8fNbgaXb8xt7bQz3SXvvbxR6RCkwon2rWSRfGWWzUu",
  "key17": "nRx5zw5jG9iU5Cfrf9XGTMN5562d3Us1JZ2rjMETRp9dZwedqKLpEnHsSXmoK421fhRrVumLVvGcspjAJjy5Hvo",
  "key18": "gtNdQpsnDdWFZMHqYeNSnweLyt8STQDXnw4Zwwdh1eJNx97pNr8oqt8gx2XcAQbzDwMirvyDMm1bzDFmNnErpLo",
  "key19": "2Dj3zs9ZJB6Je9pd2dosENZJBSYGHxVQZXATMDB8paBSYuERvhfsS3bq95AS7zWMys1uNyGYXnUJ5vy4DuTiMttU",
  "key20": "2bNwUvevDTenGaHemSLnQLLQHkKNafC2CzR81QVKjS9BH7qa6JHHApdoioPrWWnGUbQ1a9WJYD9Qn2pAGXn88rUM",
  "key21": "5i222ALbagoxAhJsewaYsWRktuQf3n9vS84TrWZHiLxvcntLNmszkvfbFKFpeMxHkLp4me2S9Fi3QfkEoYmV3XFj",
  "key22": "2yduJC7ZWRfE1MRFzhGG2tR6xfthKrX1zYqoeuo6pcUFDCiCc7vTzeggkE13t9tTh7r9zniUJ8sAqXJ41ABA3KKM",
  "key23": "8XdTohsYbPrrt6CEBuAvPDrtNkeCjbdFTgmc2qNtugHvDgc3N7v8wdMrmL6UkeQ16M1SZEzmYpgqigoHTiJuiCD",
  "key24": "GtjyeK5sLfaoGtDXSeptdK2xCujFdwCQV87QzgMyjmPpz2hcMH4NgfRxoLbrpLL6ggjownGwA8hgNq5xbMgrKBE",
  "key25": "2ZpZ65LZDEQF97jfN43eKy3tVkSBjGqiPS2YnQLECDzaps5sMU7xbYeBoZvCBszWDSwsUV4x5ewepskhyqY8vJNe",
  "key26": "43ffDDq2wtAnKHKKjhUbAnEqY6MLrXs1gpy34AtCt7NUJFhxzhAE2DorqoZPYE3dSduZs5nUjTSs88TYUX3roZui",
  "key27": "4W8ah5SJoK95dqjda2NKSo7ZB27mmazZfYWYNMBYCtPV5ncnc1ZQVW2nKFNUcgESZPqim6CZgHoE9jXYWTPGpM2i",
  "key28": "2LSbm1E1fikhkX9oq4nSiE1zXEQPc3LRvtY3zdmBKP7CdP23y2wZcpxCrHsT9Db1VUXCHtgyGrArJSpZPJF6Gdc9",
  "key29": "2ZAtRnJDHyez6ew2nBnTNfJToYfhwXdvEfMezobJ6jwV5YXh3z5YwreVVCMnEZiiBH4FiJfCdtoPc1xL7qugbREe",
  "key30": "44Ea4hBBo6a4KGR1MCgifFmao66yRRJBNm8VFropWF5THca75RSex2dznCyyyNBSZp19mffXbdxkQzV5PF8jcLjm",
  "key31": "3aagYSdfUBb4NdiqNY9CyfyAMXAq2EpyuJ4Y4hncZ1EpsneuCiyanGN7fmcazsXawx9K13KnoUHCCN1s5t7aPxzL",
  "key32": "2U1ngfid5uQkEbkuHjuPxGNqPnnHYe7ChzhiubEAyW2UF4eQbtwQsB6XUVQj82a6SwDJftjWGj3aRH3rFGvzbssq",
  "key33": "63s4RWHKoWtxvt7ZabQwjkFhVTZzHfyxy8yQzQzoRWhjmkAe7qishCRSRGjSH3Y5iLYp6TisnuAJtR8rnMa46yr9",
  "key34": "39bjwkwyUxdm56LXErBQxLkUBGMkKGfnpxuZTJZgh1bpXPFXX9n4FWR3CDkwyjCBMgj3nEM4ffRrvgwmZ5eWGVhA"
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
