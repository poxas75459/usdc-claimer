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
    "hJGYDPhjEaerUSHDWbE2WcReY1TR9E1R8xkWjgj8UFt4XfGkuzNhffHpQs1fRGyqtthH4WbGTbETF72JGFvUKSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23n4teMtVi89GjUFpbYLpuhZNLY9oM7qbEgjxhBCcYxUA2u8Gb245tB4D7GRGUbwegWucfnmJkghE6p1GaLHaoCM",
  "key1": "5ufDEqL8N1TUaQ1E5nhzbdyKeRJVQZWZMaBKRzmj3geeb1DM2u8DakemQeAELtQD3zFUF3mT2JXeDdmANHAnbqNy",
  "key2": "LuZCRmt6xDiQ9QZhjxVaXg3BaZCguxe4vuUpBnEVzNVZFdnz2mvkSnxdoYGb5tsxog6QwawFKCAZ79eBjJo5bwi",
  "key3": "5B1RShBPGnVyvtUoAcxoZgqgNmwMRWW2am5mgJ2gU5YEoS1fhScmHV4odnYEjGaBgYT84jnjCrr9uAzEakgfR17A",
  "key4": "3QVQ7sD5xTtsvb1maksv1TsSqfya24CfhSWfZ4S6MoYHdn6LgvAEJb3UTK9Q4ab9M8EdWQ3ipFHUq9siFU1eqfZ1",
  "key5": "2Nip4L1Eux4Yv4bhKu4vB6rzjCKkwKU71xhkJSjwaoq57M2XQsRCj1sExYmQ7U4WatBvGbbBinNLK4jTZ2AusTNt",
  "key6": "4krqnot2Hkpe63fmbzYBJVpVizxoSXM3bXtQEse32yG2tU625h6R7Q26YMJP8LXR14AxhApWRhVQSE6Zha9SnVe3",
  "key7": "3n2LLB3Q5XBWqmSroUFqb8d8pPzmKu8MWU13ZJ8pdBZJtoKgJYzaM7xncGbAxXdJzcZffbqCRk7KmFq5CGY51mCg",
  "key8": "3rvNYchdMrd4GsK33r8mDTapZkSedSgRS2tTMySoZMng3UvzW7Pa5km4JzjicFxWxo7NmjWTnqqzeC2Y1ydwyEmg",
  "key9": "5ijr6niesu9cMoCgM8GLs8AFdfM82vCcjYXvnKr4mYW1hKysNaYFD9asmyzeRnc1TXWHtobVucx62KNiXneJKPhC",
  "key10": "5qCWz8Qj4ULbFaCHyTrdfZGdc2osnRFVHN4MFHoxEy153CxvveVrAYqmGh6NJooDboaVuqmw4AN6HuA4bUsiMsZb",
  "key11": "4oXu9udiWmV5aH3FztGSkpTtG9698nUNZLW1GYhGEyvV1zT2DT9QofdrDf6FyYz8M38Q8H7vUocKWSArBAZdFo3C",
  "key12": "236KDrSTfMdY1opKjwivjn9qik8iDU44RjnD7xckbnXiKo4vCs8ZkqVvqnRbdRPcEVqjFGPu13HunPoEoqZp583e",
  "key13": "4MJXh9kme8H39sh7EJY7cZfa83ir9sxLJB48ViSRm7XWBKUhUBsANHei6NDyiLaA6eJbApVr6utAUPR46cBH4syy",
  "key14": "4URdjAz7qvi1BLS2rC2MsVKEHasFJfaXfhea7oPFCmTGw5rar76H1xrGuBA1gaUhVPesjkcWYjnUrPArxMBiTY1R",
  "key15": "5ojLgnWr3wtr1ZDRxxxUugS45vYhcMA2rWyMKPaHsBSZCc9GLPTCuhFXmtoABs5nKWTnisE4jbmV1q1kMPcdrbx1",
  "key16": "2M56eLEZ4WovowmzPXV81fCmYwfu5sxmBycVecoMGAhjjSbEEJLdCZZApVSW6tcfSGxsFCkuVo98rCX9AbvFNF3x",
  "key17": "TsX2rhMThMBLQdseJfq6NesihNuM4xgJPdxaascsQrbV6gWpSHo5H8mU5hTWcEbz5KPnEw58ZUy2CBnWhDA5hiK",
  "key18": "5PrYrJLhD9PHLfyLNimLRyww7DDB8c3QEAY8VwvgoacYpnZdQjuPgeRLG7tdnuMRfwsYRHRtjBoR5GRtR27ZjXFo",
  "key19": "4bEW3JLTjfFcE91EQt8yBoKsCjBuV9mHg1GowkdhMK67cRPVf55wR8pt5d1je9q21zxAUwfpbmck1RLhutrpCYAN",
  "key20": "5etEVEgYDpkZYfGySs5G48JX2eE7fkpqLHJoeF2E6xEPXr4HndnqvgkbhXadsmMx4njhhUo9vMrcTnWxVd8W41vE",
  "key21": "2GRSyLkFWrMpjG9cmKk3sSQdGBVn5jHRLs9D75uarLequq5Giz7N3xvgSeiQYqMcH3NDwyPBEab58sHpnbDCFa1U",
  "key22": "2xMMnvK9GZKxGP6NZsbpVbURouGzMknF6tZPe8EpxZ8aDi5zxYsScb62Ffw95jeQz1a8NmoGK65DdNbYrvN91XTm",
  "key23": "49XeLprAktE6rEJt6q3PRbny7gtaSvA4ZMkkroX8fDioAN6hqvdQ27wbYk91t4pUZVgJamDRLf3dASo8pRCu2d7C",
  "key24": "vJ53rre3AwN1PM2byyfJ2q1A3LD34PkPYwNbQ6JEB5jtCGrzRoNcRcXAZoKC9Voc7RX9hoNc16HTQ87cYouryfA",
  "key25": "4sfzfDqLD6kSeweV6RgiUAjSfh5pwTTT176hyD2EUW6qDR9NsXXGwFtZzpib1HfHwPox7TPVLzUXxkJgQMfV9fD5",
  "key26": "3ts3jaKQiFBPfukhQRpXAv49eEfgwQDLxJMaEWEs6wp9tYQFCVqpLBKMPZHGNbfc6fmR1DrcPdsD6eT2HexobfpY",
  "key27": "29esaeAJKetBCUP9HyiBF4C3JBJYow38ybd3SHvRSF62ZxZ6nwLxGk87R5qKbCmBnGEm6PKUixRJ2fUVGLJvdMPK",
  "key28": "CpiCj27NsfSZoM9psNNSVa6chCh5mj9n1ASZUE4hueQR44KU6rhrLxrVxhoGo329GtKxxRcvnAar4SztNCqKN6X",
  "key29": "4UdSJ1qCX1q7ok6hbMb5B6F8vfUZVBo9Sz8hF36wBqzgVcTEsXh4hCijgADPiQDDBNHY1ug3NwMT24Lm7JnYv5eZ",
  "key30": "26g8RrHYrx31MoZUAezqfsq5JLjojn5cXgtoq7EtpVc3E92ZkKruvdsxmZeW2p2PyvsjhwiEtGX7sN5ZmYS5Z4QH",
  "key31": "5fdiNtib2GjVGT9QGANwhVuRcvJUtJ5q4FRts5ksSkaVL9oDi2XYFgV5v3i2p7rraF4ERdF31DRV5zLBXUQavrNp",
  "key32": "5WhcSPYXRRmNKKR9s6hL2gN2Rmh2BZotUcNjF18eizWdSyguSNpKSk5HWiWCAPkrTVi5HXsNuu1BkcGNG17KXk2F",
  "key33": "63cTpyaGBZAFFfxjY4ocythgu223Pro1d7Xsi3ygBUK6oY89akpZGwmdkX6oS5VE4Es4aCPqY6NFxkrePg3cGjhq",
  "key34": "KWbHHK86ahkdjVuRLEHf1ZjHm2VXyJCEkkCGoT3zcFKgag284JKGGzwg95X2XoNEFwjoDEHHLcGxTkkPz135nDq",
  "key35": "3s7YFpaWWBkVaVgRHZaogq5Kau3s7yCP3pQMVTQqCYYSxR1TPt9WRzFXtRYAzVVaSrG7Bo2XkDbJV6QztENe8cqY",
  "key36": "4gVM1wseaqRxHPQHw3fApgTF8A5WSaaXCExrLf6oYM3RmoREZj9UAmQf6nFDrwjrG7LBvuUGHwE53n5FMjaHnb1q",
  "key37": "2TzUtvCjRgf6L9o8H7KM7nj59cgmPD4hByvNVxjBtD9BuQMp82pT73nD3RTVaDntYq3GXkMUHvgRapRvdwgK87eT",
  "key38": "r5FftkZF7cgiyPjViLDeCsE2LmQK4GHqugAjSpo5AtcDmkWCBSaXZobPDiYwcPppJHpKrarJ9nntdoWyEqRT23B",
  "key39": "VBTmQmt8qvqDx9RWQPBPitZtJoZZac7ZK7gwCx9GtXvJf47iLtMnav8toc87kZYAURSkGAnBp2mgBtywianYU2R",
  "key40": "3bXZwJ2ubxnWLDeWFPkT8rNGJdxa5kaVoVZfyDceDHH2VGNJxQHz3tg1R5hp1bZfVNg8haxGUrcvkEF13odWMeyQ",
  "key41": "mYfDx12zfFesvB9aScAwVkhJkjdUqiUEaGu9HHVQ3S2q9YpF6Nb3tCaUsaLFz2NNGcik39xmCKXQ7aNdvP31AK3",
  "key42": "2nC9wghPSiDKyv9ZhWvxnzzwiCVVYraRuSimsivj4wqfQHvMfBj8SQRtF1wkWAhn4ZoRWedaNnmQ16T6xbK9otkT",
  "key43": "2G4cN94bg7m3CFiKAWyL9q4EbTsZdTdqPW9pkdhs7THG1J6rjoWbJs6uZH9HboC7YNR7XwLe3rwuc25K5gR4dhKG"
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
