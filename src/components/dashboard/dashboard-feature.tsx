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
    "3CqkjEVPWBnZ5vPNX65pNqb4Lp6CSsKTJ3hizgGNYBE748xCfifakSqCCLq7vmzw2EoYbDZnu6oQMtpAUkBWL22N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "537CqKWVAa2Rtzsf9KQE7A1ssUBW7vbN4xZZTcAbxfuuFLiUR1U2RLNPmCpAhfgjCti76AYVfrEYdezUFDFsN5F5",
  "key1": "vDBLgoDZL1isMhS5UWKwCeCQ6ZdKCHnrwkfRZxdPTvLyxkEnEfGN5Du5PHNR2zL5DQwvjaqZoyHuC7pHUELYCuY",
  "key2": "2Y2QMV9GG6wx9k2Fpzov5UNBVoLYAhHmAN7fatsDUTyumzEJgG1jScRhEPFp6w4c7gYz5BkyRk29UkMRtXsfTVsj",
  "key3": "23PgbyzNW2XEgv1gk3N7TUWQqz2wYuWRgLnVxcJfh1DDWBRyf4Yvn6HVtsiWaiN8dW5pUYuPUyvqBNt2MgqmwKAT",
  "key4": "UC51DSgJKci3TxYr2ri3hAEBWH5isekj2tHXJVQE3kWFHmh6LNYd89y21ZA8oBeTTm16q5pg5PcH9oY2FeWTbWK",
  "key5": "hLyAbZq4c39et4RPSLrjsQPvKhQxgYGVGXAxcYMMba6rNYYWXgyKQLajA1ZUckkyt1hbrYF55mh5yxr3A11kYVg",
  "key6": "Lc7s9XzqkERVGt317LX2j6xW3VixTPSjzjzngNvRyXdA6owCMoREdVa7kwF7qegdJgWmHa2qmMjm4oVYPx86Jtn",
  "key7": "4kBMCfYSbsD54NnQBeCuvrdXPRuEQHMUuBQDVjAmHop98w8TyXMisS9rgaXJiNxfKzi7fFcX9uj1JDERmfBbHxoa",
  "key8": "mA1nuQ944f8hetpwzoCcsWZptPpPAhT1rHqQEC2XFMaVudxWXiFwiQTdkuB4RU4hM68ku51FSHHWko6LXpsr78V",
  "key9": "51ie35raR2moDvixTc6ZKYxttyzmqyvF1scV819YQZVriAu9KPUoMJFoabzozu757WmV9bU6JU1AsdVuiar8gWRG",
  "key10": "5GGJ8jLzhs6ncq4JfTSsyHhQMybosT73NLJB6fhf8jbKZJuav8x5yNLn3qVQv5cVnpn3CenHpVnBDSn36fgDd2xC",
  "key11": "2bpRitbfyiku6hXJa3hTSThFfn5C24Zi6GiaeYFrrEXGfzQo58UXBQmGYQzyRS867apjmTqzBvTF8uUVRS9bqUsm",
  "key12": "3zL3sQmcEuEshSSMeaCgNT7pa5aYCnabjrrTh8FiidXRYs6XBxnQjDi36Sj1rcoobKDSyix29AmVVz8tUb7uvGK",
  "key13": "5fMnZ3mWTpqxwvcLbeZNqwhN5yJwEj8e7v67CejXehuwbRMMyKkXyFqc2i7tw56xt95fT2E8jrsr6QVhmMEFcpS5",
  "key14": "3dHQwXvPQXnBcyhCRkQ9xNjwCTTGPHzBBG3MYYinADvmVcSZwcwSFJyUEz7Syf1FkPS1mbgGyUn4NEscrHEk4YnN",
  "key15": "UL1tLXsTK4yqpsWCiQUuSmzPEC8Kxovyr3KNcfkBi4Rt26t1WrxQYUEwL147vywVLCZpbyWUgajzMkdZw7UHGFC",
  "key16": "3dvxsywTpoapUGZzFyhR9hrNUU2yvwNu89hivcKXGUYojba4Yie1mxovsja6A6HmLBa2kMi722h3gUgcPeyG2jnf",
  "key17": "2mG2LNpsEoR7bDrUebgnyxHjVuLtHdGAW3VeBiRSA16vLRa4AkUUEbc6JjN6bumTDzefciPeE8GFzesLXAz5cHDJ",
  "key18": "4Ryx2HLz8DFzXEXE5NszZnnK9MbvwNRPoMvUfgDDkyQ1Q3kkTGtgpc6U8CZ3c7cBHK62edwvE4G6yn6W6FwiyHpL",
  "key19": "4qVJqQYuG7HKpq1dxkwYoAkWZZpuyq1VQYPvb8YPpWqoeKfahrFc9yoD1nAUHDW9ER29CY2u96N2qqugPzzAS2sn",
  "key20": "4YbRV8nCC9i4tYWqHaNMxoZkEx9DbxTsaLbM47cDB8vW6KPQEmaVE5soFeWMFihj8z8ojDn7UoiHRDQCmmwLFZkq",
  "key21": "2xzWrD3R7nQnZowzEiCmRaG3kK1j2UhBBdkunMBVbQAByCQXErCH8oB216hjaAv8s7ANEQjzaVUHJmXw8bv9a3Xe",
  "key22": "4Knvimh6YPV2vcHSzndkr7R5hm41vRyEHfAxdarpoagMAidCqz5D31YJAZFv3CgRJVEv4tR6rCze1jxwza2LiP54",
  "key23": "37NbNWApqKSiL8GcRjt56hk2DSWoFj24MhkhkJ311HnzPXHEor6HWy7ftMrmwhaqbEGrxgG2py4iYL596nAcwvmP",
  "key24": "7MEdmxwVXASQxWiZdjt5rW7gpwwCwmUqCtYdhUrnLmy3faLaaQf4wYnmuPXQ8mEWDGD2ChC5NgKqdDdHoAXx4RH",
  "key25": "5cN7dgAovcJdJM6rLW8hs2CMn1ULExr1yYw2Kv35f98DWaNSbxq8SbbyJbAchGCjHSpnQF4EErfnkVsKxY9xiqfL",
  "key26": "2HdKsgZi6NQp3Bvsj5CTHWsmfex4S2PVeSC9dTYynmtpeumNQ3Fd2wyhwY66sdLa6nw4pX8WR8MYpsxL9yaMEEQh",
  "key27": "2pkia1ngeFidpDqDSnaJJutpbYmsVvsVh66abHZg5CAF8VYkZnpu7jXU3mrK8LTBR3ovex5gwk3tMT66PXHX1tFH",
  "key28": "48Q1L4D3AqY3GHPPxzB1WvZEkVdhpsQybYRwkR7BKhtqNhjEWmLCLZpraavG1SGq93MShBpSdiT2SfFjmRgZiqWp",
  "key29": "3oiAeZTUP1VcgASjPrBFcgT1uBmGVfXZ3M5YFigXqg61fXbjC8mWd8FpCY8q5TZkMKo5XjLbHLb1HjXyASTYeC4m",
  "key30": "2yiATqHN6YyfRaJhCKubUkAjmJUQkTeCZckgjANsgAfxg7fi2ah6HAJcN7sGhZSVtM93PA5iroJrXUtitnZBKQLL",
  "key31": "5CqwsNKUCqKEpeBa5xsKDNF77RQaA7iFxcek8LgpgXumhHrebzFi9LSHxEbN9g5VqRQWV3EP2A6Qgk5sNcDnCpcH",
  "key32": "2mJ7SGYUHnsuWoiiTTDdsHHK8YEmddr5nXqJDJ4av3ceaK95gWqxfq8KKckHLahA5T2m7V5b6ywpUtETEHesmoSd",
  "key33": "3Wzb1ehYuyf4GejEx6hz9L66eu5pnRJ1ZAwDcKwY4YVYsAXgs9CkpMccSkBeVFqLSVMF6KkoweYMLSAEKZJPLYNd",
  "key34": "4MNXEmXHJafDfxh4bzMFNz7MHWAVJbAtLir9VwRaoCemmCPmjDC7AtjDypSypMAMudZojNvWyaB4cEZJwMdGWpQ5",
  "key35": "3a1J1qANZf5666kHU6JAzxq6PSqaDEnViEXr7jPGDHptECvphVPK7Fcehz9ZczTjbuWSnAPfSdenbQeakmfppmao",
  "key36": "3V3E2BxisprKu3LYLaARodoK2Pb1bmCaS8JkoVXAAn3NnavB2FGocDxmXLcfe9wMmvr74bPMELRKMe3C7TzGoQ27",
  "key37": "5N1Fn65J9TQHowpUBbb6JeyNs56t4isMivuuGGFqoZ8te633YAPh9WyzmcyfDQajDoPzAKjxqrfMeVxBkbjygLRd",
  "key38": "24AvG7WccAQ6uzC2URe99UjEpBG1LEnHYbdZ3HviQtJ3cbLHLqBEb2z6ortsPjVM7p4QBvzWWGxHrG6RWR1zV98f",
  "key39": "48pWiqv8zWQaWhSudvuZaTXFzpmDrqepUFLpL24BracowDqS8qg1n5UUDQ8MJBSot25pfWjqjjccVHwFYebfSBDW",
  "key40": "a6uLJCs5KpJwLeugBHvcGQ38XMwThoBqEQDNjL15YVhSXMKsZyon74AG5iZ7budy4zC5WSVHznALU9PPeHpDdrY",
  "key41": "awK8T8zAkSjLzLPzyQLKtA3hY5roR6BBxUa3Th2ADJQV1QgXTX3K42PFSETM8BP4E2dH9c6o8msShfdEqsN7MUS"
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
