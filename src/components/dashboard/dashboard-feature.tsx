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
    "4dT1EE2oL8QcWBpxoMoXWJomz83m3R5RNXmXBAbg258gQ15bznD5hGjXuBaCNYsw2bwRLNs29eWpgHhT1BTexkhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXKiHRoNFtsQHVzm39nWXsUuzeLQLJMWDiAH63uPV8DMbaFQfUWojYiH5dEZpTM78RXb3CwfmR132kCw2qmB1gz",
  "key1": "5zWCuw1yALzEvwew8ZKDSnTCHcHvfu4oSyR1m75dt5RL52JnhD7Xfv7L8urUWzJTs4iPXa9eTRJDqpu6KiabiQvs",
  "key2": "3ZLQCjFRLDjkxPnD7XwcKENa9DX7oKz46yFS9TnQ1VtEUdJ6Kz5L3RRCDEzxSKi7XXhRiuaE5nNJXAbWYtavC8Wx",
  "key3": "4MPKW382wTbwdXTX7zkH3Gx7i44AKuJeQCU9rcVivxYCwCtSHCT8SASsVCJYn4odDziF8vbM33q23W98B4VNx2oe",
  "key4": "2bd3Fr68WDmWUWfvKUjYpTACsTbozor8w1J4tzQ8vXuBAUf4qw3wN1wWovM4ArTBnZULQmvQCkzNxEGqGZSmmCBT",
  "key5": "9fcwVrodqmYGbma5aMbaLqJEuJpmQgyZZmbZmDthSxLoX83HsSKJGqis8wzpDyxcrJ6Doo7P1KEfGi2SSBm9Tvq",
  "key6": "2tqZxVEJ4aC6ZkP76LGabrtcwQZoy6q6kAgpjUL7Mgv5TC7DUctgVfmHXVdCVa9eqKpvP8BfCdx7Tpj99TWAjPPt",
  "key7": "283Hjo6DHxpydcgBCjsPD3X53teX1UNWS3o8yNsrSxWqWMLcgVHT3no5dkPxmiqodRYqpr3T8MepjXWBZCXV5HrL",
  "key8": "2wXAFdipdVoqgWNc6FfMPwE543HQLQA2CidKaKLAsyjtEH82hznUVXThcPTjBJdLaZY17NQeTTjhmwprBapQSpyQ",
  "key9": "23Mb4KoZpGccxYcjmsVBr4QBL2Z5gBWPWxCKthV4StGfsR5i3aPYVQ4wKQ4wkZcN94BC3SAuAN64vwHHzg2jmmut",
  "key10": "5UZcEmR1RrhMirq5qNUKTurbbw7sW7aYutZud4ncEAoppdyfVJdrK2dV3pM1ZFJysC3vaUrXADTp3FCgGwKhykqQ",
  "key11": "3GzDne2XRxxNrM1rWY46QappQmUeKaNMKWHyicAP9ezjcissVeiM1TLqUCpUbPsPeceK1EdJUoynf5Wxk94EUXF7",
  "key12": "2WqM99NYKjsk7BKWMAUgqGaougs6RSpQmMZEjNCHvp48hYzBW9AfpXqnX4shzhb5ZrMvf7AAz8zefyBxtCz34naN",
  "key13": "5XSep3BwwyHWbnEnqtwezVDknK7kSgkpjQnauQHdyWbXAL5nC9nYFP9C7z84FmSFDLtP1rtDprUsioHJyk2NwKWv",
  "key14": "3aJ8yoYLKeWdPDJ1hrgHYnkZ3T6RZwnWdGB1fm8XhpJmdeNcxZ4JLR2r2DRB6zrjVnd62U2RoZHMHUu4FyxmeLMa",
  "key15": "3R5rKEZhmibnbh5YG8ExVvx3KPG4piuhpG2mR6Zbo12rhoiH49AHAfi7dNsc5FpSJzCfeF9sxCSaLWVoGxXHdr3t",
  "key16": "4QzyTmJ8dWj9NFY5AK3qYuLt457MwaawJ6LGfhWRv8MKTE9vhKUGSGq7gzVV7thGZPcUSN5UqdmeuZm22kLo4d2d",
  "key17": "4jYiVkBbgqRJUYKTyhvvzdNz3WRLyaii853pDxCq88YqPsdzQ3bhjdKbTevRDxTD6VtXgu9xUKybBv3o6FbvdtbV",
  "key18": "jWVoi7Ljs4zkTTcnAnkRqrfRHgAfY22gpPZmQg1F3Pc8s6ZU3pwWsuVwkr9R8k5fX2NuRx34nQagCpHcuzUucxs",
  "key19": "NPczaePD6wSE2NcHm5rvPzbGLUeAcE641rRM7gbR8kj9uL2Fsmxi3qrD3uqxL23fPKhxRk3kSjrCruPtVBTiVMX",
  "key20": "2eoD7nHGRS9q5sHetFGXAYSk1dnSB7AZV8LFbwQdtzUNG4Wkjmo5TgYBn8yWuiipCBf5dH28V3TSJF6dQrN8i8sY",
  "key21": "2fMRR2LgzotKkyTYTTGvfSFKtXdstMbzfKbGjprpfmyfFKSKFLavWrg3ve6xGTzJZSoAhemzV1fBi1PAqorSvSRR",
  "key22": "4tdKL3bcJe5V23K1L7KAYtiCd5QNyxFALJPQoWSKr1qiRf1czK1oW1BxgRLrgyJ7XzcFAE1asV8vV1anWkbX49iF",
  "key23": "4Y5mnZCkB3DTpyyP129Eurtm5x9CxtNNnU4RkR855AAsJ714smQRcmhpR4drWtVa5MEjkQMaH4hGDsuhbDa7PUL",
  "key24": "WAa6CEDJPBWFjkjD7pBBQMNkywsvonfv6kF8rMnN4v2seRqnpUttidC4KRmbNdsMco8ohkKcF5MxAFyQh77FRDn",
  "key25": "4d6VuCuNeCvEmGLbQsJwQPxHQPi4ou3FxMRMCAw7KmpbfuvtsmbiC5FmR8cVVvGJcpw2M9P7H3nT9SNxWrQE89tQ",
  "key26": "4PfkQRoEYV672nPQHcipGpiJPXz1cZoAEXvo8djAm8C8MoZRvK2dnc9qWgo6XpRJktGW9U33ZP92Tx1ndFaGvqeP",
  "key27": "5br2FYkEBYrDC9DjsoT5r2DJXNo5hrb7mdUnkUFqWxxrAXRa8t25S46Uc2aiFZDiguLBkUpGGJZCTBKxAScWmfhN",
  "key28": "5tjeCX83h3SDsgCK2Bssn88QJzriKArEoX9BhCscmgDGa34nf9rGMt21jM9g8Dn7jmsjz27XcwdmnnkyWo7zEhQq",
  "key29": "VmJ191KSQv4LmfppJiqn6NFWWEsbB9JdTHQi9KViTV89BxNjAgkYQMX5RjU2LEZPQJpf9Z8h73grZ2iCLvsuH2y",
  "key30": "4HWRJxocVQBVFBWCz9R4fmMkbDCACvbZtanCgPfnaB8AcJCw3jMvjXSsBaACusp3RMynSiYDa6vtYSKmDc5Rp5JL",
  "key31": "3f3NZc8tnzHLDtYacUopH7Rg5tuaaQrWgxUfHprPDV2qtyfVPfqzMYm7U2dD7PyxejxAeBfCK9sDZJb84zdyGiYH",
  "key32": "bRWds6rFLZMi86qFt4zuDVBoNzskjnPfFmt8maFnAtL7iXRpMBEVU4B2ig7aA87BRfUahxAssC7o3bNttfghHDE",
  "key33": "5CD64Uv88KoZzGVxJ4Np5WynFLLtB57f9qUgoAy7a8WMpFh8sVq9HcGFwuYSTriQsK3YN8LRhp3qNaGAvKXZzxAw",
  "key34": "5k9xpdskwGpLcqjm1GrKLTEZdoPJy3D4hkW7Pw57Zeegja3xQx9fuJyYNrpdEnmeTSPMpDPiofq628QkquDV9NJy",
  "key35": "59UZxALP1JD9Zm3rReHsQNmCv9rfR6gSHT8Nr5oCsrLeB9ShhrrGzLLWHWRYDXtCesQiDk238uFExuTh5U8ABFfd",
  "key36": "2Bk19Uu2q95J4KNku74hqUtqfQQ3Lw3MLBhztEGj7mtoUB43FkJzCWt4BJqYUtXWcGiK6mHWdHP9ooEHTVgZyR6o",
  "key37": "CgnqntayQN41R3AiQ4X8V4Ey1i5CyEWjhXGnrG92VRDAxUudWxF5LoT2B8ST2wvfoFXdvhGTJMDz3H2V9pCQKAN",
  "key38": "65eQGVsMjJbCDPMJdvc51vBC86gJkdqLCWeWqz49KVWUggakxNrhLraEY7LVsrmAfaJhfSs1hzfaAxShjcQxiQkH"
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
