#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;

declare_id!("coUnmi3oBUtwtd9fjeAvSsJssXh5A5xyPbhpewyzRVF");

#[program]
pub mod usdcclaimer {
    use super::*;

  pub fn close(_ctx: Context<CloseUsdcclaimer>) -> Result<()> {
    Ok(())
  }

  pub fn decrement(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.usdcclaimer.count = ctx.accounts.usdcclaimer.count.checked_sub(1).unwrap();
    Ok(())
  }

  pub fn increment(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.usdcclaimer.count = ctx.accounts.usdcclaimer.count.checked_add(1).unwrap();
    Ok(())
  }

  pub fn initialize(_ctx: Context<InitializeUsdcclaimer>) -> Result<()> {
    Ok(())
  }

  pub fn set(ctx: Context<Update>, value: u8) -> Result<()> {
    ctx.accounts.usdcclaimer.count = value.clone();
    Ok(())
  }
}

#[derive(Accounts)]
pub struct InitializeUsdcclaimer<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  init,
  space = 8 + Usdcclaimer::INIT_SPACE,
  payer = payer
  )]
  pub usdcclaimer: Account<'info, Usdcclaimer>,
  pub system_program: Program<'info, System>,
}
#[derive(Accounts)]
pub struct CloseUsdcclaimer<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  mut,
  close = payer, // close account and return lamports to payer
  )]
  pub usdcclaimer: Account<'info, Usdcclaimer>,
}

#[derive(Accounts)]
pub struct Update<'info> {
  #[account(mut)]
  pub usdcclaimer: Account<'info, Usdcclaimer>,
}

#[account]
#[derive(InitSpace)]
pub struct Usdcclaimer {
  count: u8,
}
